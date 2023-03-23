import { Component, OnInit } from '@angular/core';
import {Account} from "../account";
import {AccountService} from "../account.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  accounts: Account[] = [];
  constructor(public accountService: AccountService) { }
  ngOnInit(): void {
    this.accountService.getAll().subscribe((data: Account[])=>{
      this.accounts = data;
      console.log(this.accounts);
    })
  }
  deleteAccount(id:number){
    this.accountService.delete(id).subscribe(res => {
      this.accounts = this.accounts.filter(item => item.id !== id);
      console.log('Account deleted successfully!');
    })
  }

}
