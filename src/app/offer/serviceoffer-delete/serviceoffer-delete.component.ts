import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceOfferService } from "../serviceoffer.service";
import { ServiceOffer } from "../serviceoffer";
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {User} from "../../login-basic/user";

@Component({
  selector: 'app-serviceoffer-delete',
  templateUrl: './serviceoffer-delete.component.html',
})
export class ServiceofferDeleteComponent implements OnInit {
  public serviceOffer: ServiceOffer;
  private id: string;
  private owner: User;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private serviceOfferService: ServiceOfferService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.serviceOfferService.getResource(this.id).subscribe(
      serviceOffer => {
        this.serviceOffer = serviceOffer;
        this.serviceOffer.getRelation('offerer').subscribe((user: User) => {
          this.serviceOffer.offerer = user;
        });
      });
  }

  delete(): void {
    this.owner = this.serviceOffer.offerer;
    if(this.owner.id == this.authenticationService.getCurrentUser().id){
      this.serviceOfferService.deleteResource(this.serviceOffer).subscribe(
        () => {
          this.router.navigate(['serviceOffers']);
        });
    }else{
      alert("Este usuario no tiene permisos para borrar esta service offer ya que no es el owner.")
    }
  }

}
