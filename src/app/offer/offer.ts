import { HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';
import {User} from "../login-basic/user";

@HateoasResource('offers')
export class Offer extends Resource{
  id: number;
  name: string;
  description: string;
  price: number;
  dateTime: Date;
  offerer: User;


  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
