import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'importations', redirectTo: 'importations/index', pathMatch: 'full'},
  { path: 'importations/index', component: IndexComponent },
  { path: 'importations/:importationId/view', component: ViewComponent },
  { path: 'importations/create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportationsRoutingModule { }
