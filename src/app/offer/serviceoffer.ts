import { HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';

@HateoasResource('serviceOffers')
export class ServiceOffer extends Resource{
  id: number;
  name: string;
  description: string;
  price: number;
  dateTime: Date;
  offerer: string;
  availability: boolean;
  durationInHours: number;


  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
