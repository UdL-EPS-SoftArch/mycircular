import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { OfferService } from '../offer.service';
import { Offer } from '../offer';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {PagedResourceCollection} from "@lagoshny/ngx-hateoas-client";

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
})
export class OfferListComponent implements OnInit {
  public Offers: Offer[] = [];
  public pageSize = 5;
  public page = 1;
  public totalOffers = 0;
  public searchedValue;
  public offerPagedResource: PagedResourceCollection<Offer>;

  constructor(
    public router: Router,
    private offerService: OfferService,
    private authenticationService: AuthenticationBasicService,
    public activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.offerService.getPage({pageParams: {size: this.pageSize }, sort: {name: 'ASC'}}).subscribe(
      (page: PagedResourceCollection<Offer>) => {
        this.offerPagedResource = page;
        this.Offers = page.resources;
        this.totalOffers = page.totalElements;
        console.log(this.Offers)
      });
  }

}
