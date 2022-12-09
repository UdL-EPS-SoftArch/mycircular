import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ServiceOffer } from "../serviceoffer";
import { ServiceOfferService } from "../serviceoffer.service";
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {PagedResourceCollection} from "@lagoshny/ngx-hateoas-client";
import {ProductOffer} from "../productoffer";

@Component({
  selector: 'app-serviceoffer-list',
  templateUrl: './service-offer-list.component.html',
})
export class ServiceOfferListComponent implements OnInit {
  public serviceOffers: ServiceOffer[] = [];
  public pageSize = 5;
  public page = 1;
  public totalServiceOffers = 0;
  public searchedValue;
  public serviceOfferPagedResource: PagedResourceCollection<ServiceOffer>;

  constructor(
    public router: Router,
    private serviceOfferService: ServiceOfferService,
    private authenticationService: AuthenticationBasicService,
    public activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.serviceOfferService.getPage({pageParams: {size: this.pageSize }, sort: {name: 'ASC'}}).subscribe(
      (page: PagedResourceCollection<ServiceOffer>) => {
        this.serviceOfferPagedResource = page;
        this.serviceOffers = page.resources;
        this.totalServiceOffers = page.totalElements;
        console.log(this.serviceOffers)
      });
  }

  changePage(): void {
    this.serviceOfferPagedResource.customPage({pageParams: {page: this.page - 1, size: this.pageSize}, sort: {name: 'ASC'}}).subscribe(
      (page: PagedResourceCollection<ServiceOffer>) => {
        this.serviceOffers = page.resources;
      });
  }

  modifyList(serviceOfferPagedResource: PagedResourceCollection<ServiceOffer>): void {
    this.serviceOfferPagedResource = serviceOfferPagedResource;
    this.serviceOffers = this.serviceOfferPagedResource.resources;
    this.totalServiceOffers = this.serviceOfferPagedResource.totalElements;
  }

  isRole(role: string): boolean {
    return  this.authenticationService.isRole(role);
  }

}
