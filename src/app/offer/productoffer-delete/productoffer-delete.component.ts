import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductOfferService } from "../productoffer.service";
import { ProductOffer } from "../productoffer";
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-productoffer-delete',
  templateUrl: './productoffer-delete.component.html',

})
export class ProductofferDeleteComponent implements OnInit {
  public productOffer: ProductOffer;
  private id: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productOfferService: ProductOfferService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productOfferService.getResource(this.id).subscribe(
      productOffer => this.productOffer = productOffer);
  }

  delete(): void {
    this.productOfferService.deleteResource(this.productOffer).subscribe(
      () => {
        this.router.navigate(['productOffers']);
      });
  }

}
