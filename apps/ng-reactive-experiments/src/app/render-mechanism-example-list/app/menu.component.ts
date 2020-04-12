import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'render-list-example-menu-component',
  template: `
    <render-list-example-menu-item-component>
      Item 1
    </render-list-example-menu-item-component>
    <render-list-example-menu-item-component>
      Item 2
    </render-list-example-menu-item-component>
    <render-list-example-menu-item-component>
      Item 3
    </render-list-example-menu-item-component>
    <render-list-example-menu-item-component>
      Item 4
    </render-list-example-menu-item-component>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderListExampleMenuComponent {

}
