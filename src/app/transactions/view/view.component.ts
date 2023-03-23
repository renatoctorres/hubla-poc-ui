import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  transaction: Transaction;

  constructor(
    public transactionService: TransactionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['transactionId'];

    this.transactionService.find(this.id).subscribe((data: Transaction)=>{
      this.transaction = data;
    });
  }

}
