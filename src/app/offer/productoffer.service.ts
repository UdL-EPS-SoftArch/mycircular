import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { ProductOffer } from "./productoffer";

@Injectable({ providedIn: 'root' })
export class ProductOfferService extends HateoasResourceOperation<ProductOffer>{

  constructor() { super(ProductOffer) }


}
