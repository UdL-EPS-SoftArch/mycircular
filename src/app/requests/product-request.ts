import { HateoasResource } from '@lagoshny/ngx-hateoas-client';
import { Request } from "./request";

@HateoasResource('prodRequests')
export class ProductRequest extends Request {
  manufacturer: string;
  brand: string;
  productCode: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
