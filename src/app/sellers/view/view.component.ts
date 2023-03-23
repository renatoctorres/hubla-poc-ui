import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Seller } from '../seller';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  seller: Seller;

  constructor(
    public sellerService: SellerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['sellerId'];

    this.sellerService.find(this.id).subscribe((data: Seller)=>{
      this.seller = data;
    });
  }

}
