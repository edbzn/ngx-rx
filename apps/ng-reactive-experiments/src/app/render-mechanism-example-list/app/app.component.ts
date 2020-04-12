import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'render-list-example-app-component',
  template: `
    <render-list-example-menu-component>
    </render-list-example-menu-component>
    <render-list-example-list-component>
    </render-list-example-list-component>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderListExampleAppComponent {

}
