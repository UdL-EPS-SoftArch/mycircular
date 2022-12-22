import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Offer } from './offer';

@Injectable({providedIn: 'root'})
export class OfferService extends HateoasResourceOperation<Offer>{

  constructor() { super(Offer); }


}
