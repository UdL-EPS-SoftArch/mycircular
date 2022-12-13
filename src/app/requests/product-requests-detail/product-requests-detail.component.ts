import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductRequestService} from "../product-request.service";
import {ProductRequest} from "../product-request";
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import {User} from "../../login-basic/user";


@Component({
  selector: 'app-product-requests-detail',
  templateUrl: './product-requests-detail.component.html',
  styleUrls: ['./product-requests-detail.component.css']
})
export class ProductRequestsDetailComponent implements OnInit {

  public productRequest: ProductRequest = new ProductRequest();

  constructor(private route: ActivatedRoute,
              private productRequestService: ProductRequestService,
              private authenticationService: AuthenticationBasicService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productRequestService.getResource(id).subscribe(
      (productRequest) => {
        this.productRequest = productRequest
        console.log(this.productRequest)
      }
    )
  }

  getCurrentUser(): User {
    console.log(this.authenticationService.getCurrentUser())
    return this.authenticationService.getCurrentUser();
  }

}
