import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceRequest} from "../service-request";
import {ServiceRequestService} from "../service-request.service";
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import {User} from "../../login-basic/user";

@Component({
  selector: 'app-service-requests-detail',
  templateUrl: './service-requests-detail.component.html',
  styleUrls: ['./service-requests-detail.component.css']
})
export class ServiceRequestsDetailComponent implements OnInit {

  public serviceRequest: ServiceRequest = new ServiceRequest();

  constructor(private route: ActivatedRoute,
              private serviceRequestService: ServiceRequestService,
              private authenticationService: AuthenticationBasicService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.serviceRequestService.getResource(id).subscribe(
      (productRequest) => {
        this.serviceRequest = productRequest
        console.log(this.serviceRequest)
      }
    )
  }

  getCurrentUser(): User {
    console.log(this.authenticationService.getCurrentUser())
    return this.authenticationService.getCurrentUser();
  }

}
