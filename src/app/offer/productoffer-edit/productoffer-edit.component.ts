import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductOfferService } from "../productoffer.service";
import { ProductOffer } from "../productoffer";
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-productoffer-edit',
  templateUrl: './productoffer-edit.component.html',
})
export class ProductofferEditComponent implements OnInit {
  public productOffer: ProductOffer;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productOfferService: ProductOfferService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productOfferService.getResource(id).subscribe(
      (productOffer: ProductOffer) => this.productOffer = productOffer) ;
  }

  onSubmit(): void {
    this.productOfferService.patchResource(this.productOffer).subscribe(
      (patchedProductOffer: ProductOffer) => {
        this.router.navigate(['productOffers', patchedProductOffer.id]);
      });
  }

  getCurrentProductOfferID(): number {
    return this.productOffer.id;
  }

}
