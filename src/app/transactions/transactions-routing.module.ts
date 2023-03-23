import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'transactions', redirectTo: 'transactions/index', pathMatch: 'full'},
  { path: 'transactions/index', component: IndexComponent },
  { path: 'transactions/:transactionId/view', component: ViewComponent },
  { path: 'transactions/create', component: CreateComponent },
  { path: 'transactions/:transactionId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
