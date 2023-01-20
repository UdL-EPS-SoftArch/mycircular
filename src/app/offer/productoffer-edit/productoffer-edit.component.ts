import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductOfferService } from "../productoffer.service";
import { ProductOffer } from "../productoffer";
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {User} from "../../login-basic/user";

@Component({
  selector: 'app-productoffer-edit',
  templateUrl: './productoffer-edit.component.html',
})
export class ProductofferEditComponent implements OnInit {
  public productOffer: ProductOffer;
  private id: string;
  private owner: User;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productOfferService: ProductOfferService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productOfferService.getResource(id).subscribe(
      (productOffer: ProductOffer) => {
        this.productOffer = productOffer;
        this.productOffer.getRelation('offerer').subscribe((user: User) => {
          this.productOffer.offerer = user;
        });
      }) ;
  }

  onSubmit(): void {
    this.owner = this.productOffer.offerer;
    if(this.owner.id == this.authenticationService.getCurrentUser().id){
      this.productOfferService.patchResource(this.productOffer).subscribe(
        (patchedProductOffer: ProductOffer) => {
          this.router.navigate([patchedProductOffer.uri]);
        });
    }else{
      alert("This user cannot edit this product offer because it is not its owner.")
    }
  }

  getCurrentProductOfferID(): number {
    return this.productOffer.id;
  }

}
