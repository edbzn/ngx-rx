import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'render-list-example-list-visible-items-component',
  template: `
    <button (click)="onToggle()">Toggle visibility</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderListExampleListVisibleItemsComponent {

  visibility = 'all';
  @Output()
  visibleItemsChange = new EventEmitter<string>();

  onToggle() {
    this.visibility = this.visibility === 'all' ? 'open' : 'all';
    this.visibleItemsChange.emit(this.visibility);
  }
}
