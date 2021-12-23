import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  ts: Transaction = new Transaction();
  submitted = false;

  constructor(private transactionService: TransactionService,
    private router: Router) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.ts = new Transaction();
  }

  save() {
    this.transactionService
    .createtransaction(this.ts).subscribe(data => {
      console.log(data)
      this.ts = new Transaction();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/list']);
  }
}