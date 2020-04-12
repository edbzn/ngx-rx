import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'render-list-example-list-component',
  template: `
    <render-list-example-list-visible-items-component (visibleItemsChange)="onVisibleItemsChange($event)">
    </render-list-example-list-visible-items-component>
    <render-list-example-list-content-component [list]="list">
    </render-list-example-list-content-component>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderListExampleListComponent {
  list: {name: string, done: boolean}[] = [];

  constructor(private store: Store<any>) {
  }

  onVisibleItemsChange(visibility: string) {

  }

}
