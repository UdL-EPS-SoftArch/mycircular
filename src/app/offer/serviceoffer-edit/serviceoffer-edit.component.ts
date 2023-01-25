import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceOfferService } from "../serviceoffer.service";
import { ServiceOffer } from "../serviceoffer";
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {User} from "../../login-basic/user";
import {ErrorMessageService} from "../../error-handler/error-message.service";

@Component({
  selector: 'app-serviceoffer-edit',
  templateUrl: './serviceoffer-edit.component.html',
})
export class ServiceofferEditComponent implements OnInit {
  public serviceOffer: ServiceOffer;
  private id: string;
  private owner: User;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private serviceOfferService: ServiceOfferService,
              private authenticationService: AuthenticationBasicService,
              private errorMessageService: ErrorMessageService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.serviceOfferService.getResource(id).subscribe(
      (serviceOffer: ServiceOffer) => {
        this.serviceOffer = serviceOffer;
        this.serviceOffer.getRelation('offerer').subscribe((user: User) => {
          this.serviceOffer.offerer = user;
        });
      }) ;
  }

  onSubmit(): void {
    this.owner = this.serviceOffer.offerer;
    if(this.owner.id == this.authenticationService.getCurrentUser().id){
      this.serviceOfferService.patchResource(this.serviceOffer).subscribe(
        (patchedServiceOffer: ServiceOffer) => {
          this.router.navigate([patchedServiceOffer.uri]);
        });
    }else{
      this.errorMessageService.showErrorMessage('This user cannot edit this service offer because it is not its owner.');
    }
  }

  getCurrentSubjectID(): number {
    return this.serviceOffer.id;
  }

}
