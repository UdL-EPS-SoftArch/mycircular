import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceOfferService } from "../serviceoffer.service";
import { ServiceOffer } from "../serviceoffer";
import { Location } from '@angular/common';

@Component({
  selector: 'app-serviceoffer-create',
  templateUrl: './serviceoffer-create.component.html',
})
export class ServiceofferCreateComponent implements OnInit {
  public serviceOffer: ServiceOffer;

  constructor(private router: Router,
              private location: Location,
              private serviceOfferService: ServiceOfferService) { }

  ngOnInit(): void {
    this.serviceOffer = new ServiceOffer()
  }

  onSubmit(): void {
    this.serviceOfferService.createResource( {body: this.serviceOffer}).subscribe(
      (serviceOffer: ServiceOffer) => this.router.navigate(['productOffers', serviceOffer.id]));
  }

  onCancel(): void {
    this.location.back();
  }

}
