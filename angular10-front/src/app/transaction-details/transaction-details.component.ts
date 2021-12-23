import { Transaction } from '../transaction';
import { Component, OnInit, Input } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {

  _id: string;
  ts: Transaction;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: TransactionService) { }

  ngOnInit() {
    this.ts = new Transaction();

    this._id = this.route.snapshot.params['_id'];
    console.log("gh"+this._id);
    this.userService.gettransaction(this._id)
      .subscribe(data => {
        console.log(data)
        this.ts = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['list']);
  }
}