import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ProductOffer } from "../productoffer";
import { ProductOfferService } from "../productoffer.service";
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {PagedResourceCollection} from "@lagoshny/ngx-hateoas-client";

@Component({
  selector: 'app-productoffer-list',
  templateUrl: './product-offer-list.component.html',
})
export class ProductOfferListComponent implements OnInit {
  public ProductOffers: ProductOffer[] = [];
  public pageSize = 5;
  public page = 1;
  public totalProductOffers = 0;
  public searchedValue;
  public productOfferPagedResource: PagedResourceCollection<ProductOffer>;

  constructor(
    public router: Router,
    private productOfferService: ProductOfferService,
    private authenticationService: AuthenticationBasicService,
    public activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.productOfferService.getPage({pageParams: {size: this.pageSize }, sort: {name: 'ASC'}}).subscribe(
      (page: PagedResourceCollection<ProductOffer>) => {
        this.productOfferPagedResource = page;
        this.ProductOffers = page.resources;
        this.totalProductOffers = page.totalElements;
        console.log(this.ProductOffers)
      });
  }

}
