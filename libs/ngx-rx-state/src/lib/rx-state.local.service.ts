import {Injectable, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import { RxState } from '@rxjs-state';

@Injectable()
export class RxLocalState<T extends object> extends RxState<T> implements OnDestroy {
  readonly subscription = new Subscription();
  readonly $ = this.$;

  constructor() {
    super();
    this.subscription.add(this.subscribe());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}