import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { defer } from 'rxjs';
import { BaseComponent } from '../../base.component.ts/base.component';
import { tap } from 'rxjs/operators';
import { fromZoneEvent } from '@ngx-rx/rxjs-etc';

@Component({
  selector: 'app-cd-parent06',
  template: `
    <h2>
      CD 06
      <small
        >ApplicationRef#tick when called in the component renders itself and all
        child components with cd.Default</small
      >
    </h2>
    <div class="case-info">
      <span>CD: <b class="cds">Default</b></span>
      <span
        >dirty: <b class="dirty">{{ isMarkedDirty }}</b></span
      >
      <span
        >render: <b class="num-renders">{{ getNumOfRenderings() }}</b></span
      >
    </div>
    <div class="case-interaction">
      <button #button>ApplicationRef#tick</button>
    </div>
    <div class="case-content">
      <app-cd06-child01-default></app-cd06-child01-default>
      <app-cd06-child02-push></app-cd06-child02-push>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class CdParent06Component extends BaseComponent {
  @ViewChild('button') button: ElementRef<HTMLButtonElement>;
  btnClick$ = defer(() => fromZoneEvent(this.button.nativeElement, 'click'));

  baseEffects$ = this.btnClick$.pipe(tap(() => this.appRef_tick()));
}
