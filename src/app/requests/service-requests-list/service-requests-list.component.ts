import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {ServiceRequest} from "../service-request";
import {ServiceRequestService} from "../service-request.service";
import {HttpMethod, PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";

@Component({
  selector: 'app-service-requests-list',
  templateUrl: './service-requests-list.component.html',
  styleUrls: ['./service-requests-list.component.css']
})
export class ServiceRequestsListComponent implements OnInit {

  public serviceRequests: ServiceRequest[] = [];
  public pageSize: number = 5;
  public page: number = 1;
  public totalServRequests: number = 0;
  public currentUsername: string = this.authenticationBasicService.getCurrentUser().id
  public userParam : string = this.getUsernameParam()

  constructor(public router: Router,
              private serviceRequestService: ServiceRequestService,
              private authenticationBasicService: AuthenticationBasicService,
  ) {
  }

  getUsernameParam(): string {
    return "?username=".concat(this.currentUsername)
  }

  ngOnInit(): void {

    console.log(this.userParam)
    this.serviceRequestService.customQuery(HttpMethod.GET, this.userParam)
      .subscribe(
        (serviceRequests: ServiceRequest[]) => {
          for(let serviceRequest of serviceRequests) {
            console.log(serviceRequest)
          }
          this.serviceRequests = serviceRequests
          console.log("i got it")
          console.log(typeof serviceRequests)
          console.log(serviceRequests[0].name)
        }
      )
    console.log(this.serviceRequests)
  }

  //todo: corregir la paginacion
  changePage(): void {
    this.serviceRequestService.getPage({
      pageParams: {page: this.page - 1, size: this.pageSize},
      sort: {name: 'ASC'}
    }).subscribe(
      (page: PagedResourceCollection<ServiceRequest>) => {
        this.serviceRequests = page.resources;
        console.log(this.serviceRequests)
      }
    )
  };


  detail(serviceRequests: ServiceRequest): void {
    this.router.navigate(['servRequests', serviceRequests.id]);
  }

}
