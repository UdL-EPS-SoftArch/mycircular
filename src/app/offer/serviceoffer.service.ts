import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { ServiceOffer } from "./serviceoffer";

@Injectable({ providedIn: 'root' })
export class ServiceofferService extends HateoasResourceOperation<ServiceOffer>{

  constructor() { super(ServiceOffer); }


}
