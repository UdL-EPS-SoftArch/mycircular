import {HateoasResourceOperation, ResourceCollection} from "@lagoshny/ngx-hateoas-client";
import { Request } from './request'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'}) //no se si es de request. en user lo sacan de 'root
export class RequestService extends HateoasResourceOperation<Request> {
  constructor() {
    super(Request);
  }

  public findById(query: number): Observable<ResourceCollection<Request>> {
    return this.searchCollection('findById', {params: {text: query}});
  }

  public findByName(query: string): Observable<ResourceCollection<Request>> {
    return this.searchCollection('findByName', {
      params: {
        text: query
      }
    })
  }
}
