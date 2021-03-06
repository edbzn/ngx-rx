import {
  BehaviorSubject,
  combineLatest, concat, defer,
  EMPTY,
  isObservable,
  NextObserver,
  Observable,
  PartialObserver,
  Subject,
  Subscribable,
  Subscription
} from 'rxjs';
import {
  catchError,
  distinctUntilChanged, map,
  mergeAll,
  switchMap, switchMapTo, take,
  tap
} from 'rxjs/operators';
import {
  CdStrategy,
  DEFAULT_STRATEGY_NAME,
  StrategySelection
} from './strategy';
import { nameToStrategy } from './nameToStrategy';

export interface CdAware<U> extends Subscribable<U> {
  nextPotentialObservable: (value: any) => void;
  nextStrategy: (config: string | Observable<string>) => void;
}

/**
 * class CdAware
 *
 * @description
 * This abstract class holds all the shared logic for the push pipe and the let directive
 * responsible for change detection
 * If you extend this class you need to implement how the update of the rendered value happens.
 * Also custom behaviour is something you need to implement in the extending class
 */
export function createCdAware<U>(cfg: {
  strategies: StrategySelection<U>;
  resetObserver: NextObserver<void>;
  updateObserver: PartialObserver<U> & NextObserver<U>;
}): CdAware<U | undefined | null> {

  let strategy: CdStrategy<U>;
  const strategyName$ = new BehaviorSubject<string | Observable<string>>(DEFAULT_STRATEGY_NAME);
  const updateStrategyEffect$: Observable<CdStrategy<U>> = strategyName$.pipe(
    stringOrObservable =>
      typeof stringOrObservable === 'string'
        ? stringOrObservable
        : stringOrObservable.pipe(mergeAll()),
    nameToStrategy(cfg.strategies),
    tap(s => strategy = s)
  );

  const observablesFromTemplate$ = new Subject<Observable<U>>();
  const renderingEffect$ = observablesFromTemplate$.pipe(
    distinctUntilChanged(),
    tap((observable$) => {
      if (observable$ === null) {
        cfg.updateObserver.next(observable$ as any);
      } else {
        cfg.resetObserver.next();
      }
      strategy.render();
    }),
    map(o$ => o$.pipe(strategy.behaviour())),
    switchMap((observable$) => (observable$ == null) ? EMPTY : observable$),
    distinctUntilChanged(),
    tap(cfg.updateObserver),
    tap(() => strategy.render()),
    catchError(e => {
      console.error(e);
      return EMPTY;
    })
  );

  return {
    nextPotentialObservable(value: any): void {
      observablesFromTemplate$.next(value);
    },
    nextStrategy(nextConfig: string | Observable<string>): void {
      strategyName$.next(nextConfig);
    },
    subscribe(): Subscription {
      return new Subscription()
        .add(updateStrategyEffect$.subscribe())
        .add(renderingEffect$.subscribe());
    }
  } as CdAware<U | undefined | null>;
}
