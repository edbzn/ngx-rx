import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'render-list-example-list-content-component',
  template: `
    <ng-container *ngFor="let item of list">
        <render-list-example-list-item-component>
          {{item.name}}
        </render-list-example-list-item-component>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderListExampleListContentComponent {
  @Input()
  list
}
