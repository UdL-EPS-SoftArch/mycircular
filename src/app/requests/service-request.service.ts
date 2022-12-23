import {HateoasResourceOperation, ResourceCollection} from "@lagoshny/ngx-hateoas-client";
import { ServiceRequest } from './service-request'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class ServiceRequestService extends HateoasResourceOperation<ServiceRequest> {
  constructor() {
    super(ServiceRequest);
  }

  public findById(query: number): Observable<ResourceCollection<ServiceRequest>> {
    return this.searchCollection('findById', {params: {text: query}});
  }

  public findByName(query: string): Observable<ResourceCollection<ServiceRequest>> {
    return this.searchCollection('findByName', {
      params: {
        text: query
      }
    })
  }

  public findByNameContaining(query: string): Observable<ResourceCollection<ServiceRequest>> {
    return this.searchCollection('findByNameContaining', { params: { text: query } });
  }

}
