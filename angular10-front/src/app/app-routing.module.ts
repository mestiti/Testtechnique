import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransactionListComponent } from './transaction-list/transaction-list.component';
import { UpdateTransactionComponent } from './update-transaction/update-transaction.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TransactionListComponent },
  { path: 'add', component: CreateTransactionComponent },
  { path: 'update/:_id', component: UpdateTransactionComponent },
  { path: 'details/:_id', component: TransactionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }