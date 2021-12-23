import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.css']
})
export class UpdateTransactionComponent implements OnInit {

  _id: string;
  ts: Transaction;

  constructor(private route: ActivatedRoute,private router: Router,
    private transactionService: TransactionService) { }

  ngOnInit() {
    this.ts = new Transaction();

    this._id = this.route.snapshot.params['_id'];
    
    this.transactionService.gettransaction(this._id)
      .subscribe(data => {
        this.ts = data;
      }, error => console.log(error));
  }

  updateUser() {
    this.transactionService.updatetransaction(this._id, this.ts)
      .subscribe(data => {
        console.log(data);
        this.ts = new Transaction();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateUser();    
  }

  gotoList() {
    this.router.navigate(['/list']);
  }
}