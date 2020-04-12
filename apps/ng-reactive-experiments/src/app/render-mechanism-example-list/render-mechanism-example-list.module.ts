import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ROUTES as CD_ROUTES } from './render-mechanism-example-list.routes';
import { RenderListExampleAppComponent } from './app/app.component';
import { RenderListExampleListComponent } from './app/list.component';
import { RenderListExampleListItemComponent } from './app/list-item.component';
import { RenderListExampleMenuComponent } from './app/menu.component';
import { RenderListExampleMenuItemComponent } from './app/menu-item.component';
import { RenderListExampleListContentComponent } from './app/list-content.component';
import { RenderListExampleListVisibleItemsComponent } from './app/visible-items.component';


@NgModule({
  declarations: [
    RenderListExampleAppComponent,
    RenderListExampleMenuComponent,
    RenderListExampleMenuItemComponent,
    RenderListExampleListComponent,
    RenderListExampleListContentComponent,
    RenderListExampleListVisibleItemsComponent,
    RenderListExampleListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CD_ROUTES),
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class RenderMechanismExampleListModule {
}
