import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';
import {User} from "../login-basic/user";
import { Request } from "./request";

@HateoasResource('prodRequests')
export class ProductRequest extends Request {
//  manufacturer: string;
//  brand: string;
//  productCode: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }



}
