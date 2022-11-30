import { HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';

@HateoasResource('productOffers')
export class ProductOffer extends Resource{
  id: number;
  name: string;
  description: string;
  price: number;
  dateTime: Date;
  offerer: string;
  manufacturer: string;
  brand: string;
  productCode: string;


  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
