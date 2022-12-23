import { HateoasResource } from '@lagoshny/ngx-hateoas-client';
import { Request } from "./request";

@HateoasResource('servRequests')
export class ServiceRequest extends Request {
  availability: boolean;
  durationInHours: number;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
