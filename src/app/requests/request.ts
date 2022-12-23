import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';
import {User} from "../login-basic/user";

@HateoasResource('requests')
export class Request extends Resource {
  id: number;
  name: string;
  price: number;
  description: string;
  requester: User;
  date: Date;
  uri: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }



}
