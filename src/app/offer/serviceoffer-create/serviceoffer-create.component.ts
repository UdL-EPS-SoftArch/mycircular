import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceOfferService } from "../serviceoffer.service";
import { ServiceOffer } from "../serviceoffer";
import { Location } from '@angular/common';
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";

@Component({
  selector: 'app-serviceoffer-create',
  templateUrl: './serviceoffer-create.component.html',
})
export class ServiceofferCreateComponent implements OnInit {
  public serviceOffer: ServiceOffer;

  constructor(private router: Router,
              private location: Location,
              private serviceOfferService: ServiceOfferService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.serviceOffer = new ServiceOffer()
  }

  onSubmit(): void {
    this.serviceOffer.offerer = this.authenticationService.getCurrentUser();
    this.serviceOfferService.createResource( {body: this.serviceOffer}).subscribe(
      (serviceOffer: ServiceOffer) => this.router.navigate([serviceOffer.uri]));
  }

  onCancel(): void {
    this.location.back();
  }

}
