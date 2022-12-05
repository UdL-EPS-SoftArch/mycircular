import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceOfferService } from "../serviceoffer.service";
import { ServiceOffer } from "../serviceoffer";
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-serviceoffer-detail',
  templateUrl: './serviceoffer-detail.component.html',
})
export class ServiceofferDetailComponent implements OnInit {
  public serviceOffer: ServiceOffer;

  constructor(private route: ActivatedRoute,
              private serviceOfferService: ServiceOfferService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.serviceOfferService.getResource(id).subscribe(
      serviceOffer => {
        this.serviceOffer = serviceOffer;
      });
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }

}
