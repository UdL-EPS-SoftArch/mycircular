import { HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';

@HateoasResource('offers')
export class Offer extends Resource{
  id: number;
  name: string;
  description: string;
  price: number;
  dateTime: Date;
  offerer: string;


  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
