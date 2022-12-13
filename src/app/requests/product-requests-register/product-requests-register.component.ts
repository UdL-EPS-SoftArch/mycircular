import {Component, Input, OnInit} from '@angular/core';
import {ProductRequest} from "../product-request";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {ProductRequestService} from "../product-request.service";
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";

@Component({
  selector: 'app-product-requests-register',
  templateUrl: './product-requests-register.component.html',
  styleUrls: ['./product-requests-register.component.css']
})
export class ProductRequestsRegisterComponent implements OnInit {

  public prodRequest: ProductRequest;
  @Input() name: string;
  @Input() description: string;
  @Input() price: number;
  @Input() dateTime: Date;
  @Input() manufacturer: string;
  @Input() brand: string;
  @Input() productCode: string;

  constructor(private router: Router,
              private location: Location,
              private productRequestService: ProductRequestService,
              private authenticationBasicService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.prodRequest = new ProductRequest();
  }

  onSubmit(): void {
    this.popUp()
  }

  popUp(): void {
    let submit = confirm("Do you want to request this offer?");
    if(submit) {
      this.createRequest()
    } else {
      console.log("nothing happens")
    }

  }

  createRequest(): void {
    this.prodRequest.description = this.description
    this.prodRequest.name = this.name
    this.prodRequest.price = this.price
    this.prodRequest.date = this.dateTime
    this.prodRequest.brand = this.brand
    this.prodRequest.manufacturer = this.manufacturer
    this.prodRequest.productCode = this.productCode
    this.prodRequest.requester = this.authenticationBasicService.getCurrentUser()
    console.log(this.prodRequest)
    this.productRequestService.createResource(
      {
        body: this.prodRequest
      }
    ).subscribe(
      () => {
        console.log("Product Request created", this.prodRequest)
      });
  }

}
