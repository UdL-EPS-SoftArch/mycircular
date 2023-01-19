import {HateoasResourceOperation, ResourceCollection} from "@lagoshny/ngx-hateoas-client";
import { ProductRequest } from './product-request'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {User} from "../login-basic/user";

@Injectable({providedIn: 'root'}) //no se si es de request. en user lo sacan de 'root
export class ProductRequestService extends HateoasResourceOperation<ProductRequest> {
  constructor() {
    super(ProductRequest);
  }

  public findById(query: number): Observable<ResourceCollection<ProductRequest>> {
    return this.searchCollection('findById', {params: {text: query}});
  }

  public findByName(query: string): Observable<ResourceCollection<ProductRequest>> {
    return this.searchCollection('findByName', {
      params: {
        text: query
      }
    })
  }

  public findByNameContaining(query: string): Observable<ResourceCollection<ProductRequest>> {
    return this.searchCollection('findByNameContaining', { params: { text: query } });
  }

}
