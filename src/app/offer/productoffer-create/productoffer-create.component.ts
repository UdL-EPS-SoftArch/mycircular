import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductOfferService } from "../productoffer.service";
import {AuthenticationBasicService} from 'src/app/login-basic/authentication-basic.service';
import { ProductOffer } from "../productoffer";
import { Location } from '@angular/common';

@Component({
  selector: 'app-productoffer-create',
  templateUrl: './productoffer-create.component.html',
})
export class ProductofferCreateComponent implements OnInit {
  public productOffer: ProductOffer;

  constructor(private router: Router,
              private location: Location,
              private productOfferService: ProductOfferService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.productOffer = new ProductOffer()
  }

  onSubmit(): void {
    this.productOffer.offerer = this.authenticationService.getCurrentUser();
    this.productOfferService.createResource( {body: this.productOffer}).subscribe(
      (productOffer: ProductOffer) => this.router.navigate([productOffer.uri]));
  }

  onCancel(): void {
    this.location.back();
  }

}
