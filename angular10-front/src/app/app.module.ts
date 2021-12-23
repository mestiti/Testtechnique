import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { UpdateTransactionComponent } from './update-transaction/update-transaction.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CreateTransactionComponent,
    TransactionDetailsComponent,
    TransactionListComponent,
    UpdateTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
