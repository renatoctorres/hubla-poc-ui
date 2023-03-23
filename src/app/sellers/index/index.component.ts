import { Component } from '@angular/core';
import {Seller} from "../seller";
import {SellerService} from "../seller.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  sellers: Seller[] = [];
  constructor(public sellerService: SellerService) { }
  ngOnInit(): void {
    this.sellerService.getAll().subscribe((data: Seller[])=>{
      this.sellers = data;
      console.log(this.sellers);
    })
  }
  deleteSeller(id:number){
    this.sellerService.delete(id).subscribe(res => {
      this.sellers = this.sellers.filter(item => item.id !== id);
      console.log('Seller deleted successfully!');
    })
  }
}
