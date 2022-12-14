import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ServiceRequest} from "../service-request";
import {ServiceRequestService} from "../service-request.service";

@Component({
  selector: 'app-service-requests-delete',
  templateUrl: './service-requests-delete.component.html',
  styleUrls: ['./service-requests-delete.component.css']
})
export class ServiceRequestsDeleteComponent implements OnInit {

  public serviceRequest: ServiceRequest = new ServiceRequest();
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceRequestService: ServiceRequestService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.serviceRequestService.getResource(this.id).subscribe(
      (serviceRequest: ServiceRequest) =>
        this.serviceRequest = serviceRequest
    );
  }

  delete(): void {
    this.serviceRequestService.deleteResource(this.serviceRequest).subscribe(
      () => {
        this.router.navigate(['/requests']);
      });
  }

}
