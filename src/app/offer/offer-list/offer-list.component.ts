import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { OfferService } from '../offer.service';
import { Offer } from '../offer';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { PagedResourceCollection } from "@lagoshny/ngx-hateoas-client";
import { switchMap, map } from 'rxjs/operators';
import { User } from '../../login-basic/user';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
})
export class OfferListComponent implements OnInit {
  public offers: Offer[] = [];
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
        this.offers = page.resources;
        this.totalOffers = page.totalElements;
        this.offers.map(offer => {
          offer.getRelation('offerer').subscribe((user: User) => {
            offer.offerer = user;
          });
        });
        console.log(this.offers)
      });
  }

  changePage(): void {
    this.offerPagedResource.customPage({pageParams: {page: this.page - 1, size: this.pageSize}, sort: {name: 'ASC'}}).subscribe(
      (page: PagedResourceCollection<Offer>) => {
        this.offers = page.resources;
      });
  }

  modifyList(offerPagedResource: PagedResourceCollection<Offer>): void {
    this.offerPagedResource = offerPagedResource;
    this.offers = this.offerPagedResource.resources;
    this.totalOffers = this.offerPagedResource.totalElements;
  }

  isRole(role: string): boolean {
    return  this.authenticationService.isRole(role);
  }

}
