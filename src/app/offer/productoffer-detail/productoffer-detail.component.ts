import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductOfferService } from "../productoffer.service";
import { ProductOffer } from "../productoffer";
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-productoffer-detail',
  templateUrl: './productoffer-detail.component.html',

})
export class ProductofferDetailComponent implements OnInit {
  public productOffer: ProductOffer;

  constructor(private route: ActivatedRoute,
              private productOfferService: ProductOfferService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productOfferService.getResource(id).subscribe(
      productOffer => {
        this.productOffer = productOffer;
      });
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }

}
