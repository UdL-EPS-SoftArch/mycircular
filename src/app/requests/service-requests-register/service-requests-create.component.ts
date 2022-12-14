import {Component, Input, OnInit} from '@angular/core';
import {ServiceRequest} from "../service-request";
import {ServiceRequestService} from "../service-request.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";

@Component({
  selector: 'app-service-requests-register',
  templateUrl: './service-requests-create.component.html',
  styleUrls: ['./service-requests-create.component.css']
})
export class ServiceRequestsCreateComponent implements OnInit {

  public serviceRequest: ServiceRequest;
  @Input() name: string;
  @Input() description: string;
  @Input() price: number;
  @Input() dateTime: Date;
  @Input() availability: boolean;
  @Input() durationInHours: number;

  constructor(private router: Router,
              private location: Location,
              private serviceRequestService: ServiceRequestService,
              private authenticationBasicService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.serviceRequest = new ServiceRequest();
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
    this.serviceRequest.description = this.description
    this.serviceRequest.name = this.name
    this.serviceRequest.price = this.price
    this.serviceRequest.date = this.dateTime
    this.serviceRequest.availability = this.availability
    this.serviceRequest.durationInHours = this.durationInHours
    this.serviceRequest.requester = this.authenticationBasicService.getCurrentUser()
    console.log(this.serviceRequest)
    this.serviceRequestService.createResource(
      {
        body: this.serviceRequest
      }
    ).subscribe(
      () => {
        console.log("service Request created", this.serviceRequest)
        this.location.back()
        //this.router.navigate
      });
  }

}
