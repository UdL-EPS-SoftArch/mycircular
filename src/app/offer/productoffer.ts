import { HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';
import {User} from "../login-basic/user";

@HateoasResource('productOffers')
export class ProductOffer extends Resource{
  id: number;
  name: string;
  description: string;
  price: number;
  dateTime: Date;
  offerer: User;
  manufacturer: string;
  brand: string;
  productCode: string;
  uri: string;


  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
