import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductOfferService } from "../productoffer.service";
import { ProductOffer } from "../productoffer";
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {User} from "../../login-basic/user";

@Component({
  selector: 'app-productoffer-delete',
  templateUrl: './productoffer-delete.component.html',

})
export class ProductofferDeleteComponent implements OnInit {
  public productOffer: ProductOffer;
  private id: string;
  private owner: User;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productOfferService: ProductOfferService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productOfferService.getResource(this.id).subscribe(
      productOffer => {
        this.productOffer = productOffer;
        this.productOffer.getRelation('offerer').subscribe((user: User) => {
          this.productOffer.offerer = user;
        });
      });
  }

  delete(): void {
    this.owner = this.productOffer.offerer;
    if(this.owner.id == this.authenticationService.getCurrentUser().id){
      this.productOfferService.deleteResource(this.productOffer).subscribe(
        () => {
          this.router.navigate(['productOffers']);
        });
    }else{
      alert("Este usuario no tiene permisos para borrar esta product offer ya que no es el owner.")
    }
  }

}
