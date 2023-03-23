import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'sellers', redirectTo: 'sellers/index', pathMatch: 'full'},
  { path: 'sellers/index', component: IndexComponent },
  { path: 'sellers/:sellerId/view', component: ViewComponent },
  { path: 'sellers/create', component: CreateComponent },
  { path: 'sellers/:sellerId/edit', component: EditComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellersRoutingModule { }
