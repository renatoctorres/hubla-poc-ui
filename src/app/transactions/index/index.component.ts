import { Component } from '@angular/core';
import {Transaction} from "../transaction";
import {TransactionService} from "../transaction.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  transactions: Transaction[] = [];
  constructor(public transactionService: TransactionService) { }
  ngOnInit(): void {
    this.transactionService.getAll().subscribe((data: Transaction[])=>{
      this.transactions = data;
      console.log(this.transactions);
    })
  }
  deleteTransaction(id:number){
    this.transactionService.delete(id).subscribe(res => {
      this.transactions = this.transactions.filter(item => item.id !== id);
      console.log('Transaction deleted successfully!');
    })
  }
}
