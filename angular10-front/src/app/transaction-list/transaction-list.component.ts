import { TransactionDetailsComponent } from '../transaction-details/transaction-details.component';
import { Observable } from "rxjs";
import { TransactionService } from "../transaction.service";
import { Transaction } from "../transaction";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-transaction-list",
  templateUrl: "./transaction-list.component.html",
  styleUrls: ["./transaction-list.component.css"]
})
export class TransactionListComponent implements OnInit {
  transactions: Observable<Transaction[]>;

  constructor(private transactionService: TransactionService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.transactions = this.transactionService.gettransactionList();
  }

  deleteTransaction(_id: string) {
    this.transactionService.deletetransaction(_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updateTransaction(id: string){
    this.router.navigate(['update', id]);
  }
  transactionDetails(_id: string){
    this.router.navigate(['details', _id]);
  }
}