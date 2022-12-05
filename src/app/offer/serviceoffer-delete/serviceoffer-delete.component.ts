import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceOfferService } from "../serviceoffer.service";
import { ServiceOffer } from "../serviceoffer";
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-serviceoffer-delete',
  templateUrl: './serviceoffer-delete.component.html',
})
export class ServiceofferDeleteComponent implements OnInit {
  public serviceOffer: ServiceOffer;
  private id: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private serviceOfferService: ServiceOfferService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.serviceOfferService.getResource(this.id).subscribe(
      serviceOffer => this.serviceOffer = serviceOffer);
  }

  delete(): void {
    this.serviceOfferService.deleteResource(this.serviceOffer).subscribe(
      () => {
        this.router.navigate(['serviceOffers']);
      });
  }

}
