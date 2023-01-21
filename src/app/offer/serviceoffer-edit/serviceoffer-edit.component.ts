import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceOfferService } from "../serviceoffer.service";
import { ServiceOffer } from "../serviceoffer";
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-serviceoffer-edit',
  templateUrl: './serviceoffer-edit.component.html',
})
export class ServiceofferEditComponent implements OnInit {
  public serviceOffer: ServiceOffer;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private serviceOfferService: ServiceOfferService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.serviceOfferService.getResource(id).subscribe(
      (serviceOffer: ServiceOffer) => this.serviceOffer = serviceOffer) ;
  }

  onSubmit(): void {
    this.serviceOffer.offerer = this.authenticationService.getCurrentUser();
    this.serviceOfferService.patchResource(this.serviceOffer).subscribe(
      (patchedServiceOffer: ServiceOffer) => {
        this.router.navigate([patchedServiceOffer.uri]);
      });
  }

  getCurrentSubjectID(): number {
    return this.serviceOffer.id;
  }

}
