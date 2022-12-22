import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ProductOffer } from "../productoffer";
import { ProductOfferService } from "../productoffer.service";
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {PagedResourceCollection} from "@lagoshny/ngx-hateoas-client";
import { switchMap, map } from 'rxjs/operators';
import { User } from '../../login-basic/user';

@Component({
  selector: 'app-productoffer-list',
  templateUrl: './product-offer-list.component.html',
})
export class ProductOfferListComponent implements OnInit {
  public productOffers: ProductOffer[] = [];
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
        this.productOffers = page.resources;
        this.totalProductOffers = page.totalElements;
        this.productOffers.map(offer => {
          offer.getRelation('offerer').subscribe((user: User) => {
            offer.offerer = user;
          });
        });
        console.log(this.productOffers)
      });
  }

  changePage(): void {
    this.productOfferPagedResource.customPage({pageParams: {page: this.page - 1, size: this.pageSize}, sort: {name: 'ASC'}}).subscribe(
      (page: PagedResourceCollection<ProductOffer>) => {
        this.productOffers = page.resources;
      });
  }

  modifyList(productOfferPagedResource: PagedResourceCollection<ProductOffer>): void {
    this.productOfferPagedResource = productOfferPagedResource;
    this.productOffers = this.productOfferPagedResource.resources;
    this.totalProductOffers = this.productOfferPagedResource.totalElements;
  }

  isRole(role: string): boolean {
    return  this.authenticationService.isRole(role);
  }

}
