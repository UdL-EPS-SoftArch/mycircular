import { HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';
import {User} from "../login-basic/user";

@HateoasResource('serviceOffers')
export class ServiceOffer extends Resource{
  id: number;
  name: string;
  description: string;
  price: number;
  dateTime: Date;
  offerer: User;
  availability: boolean;
  durationInHours: number;
  uri: string;


  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
