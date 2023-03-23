import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Seller } from '../seller';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  seller: Seller;
  form: FormGroup;

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

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.sellerService.update(this.id, this.form.value).subscribe(res => {
      console.log('Seller updated successfully!');
      this.router.navigateByUrl('seller/index');
    })
  }

}
