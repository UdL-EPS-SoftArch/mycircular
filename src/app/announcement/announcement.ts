import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('announcements')
export class Announcement extends Resource {
  id: number;
  name: string;
  price: number;
  description: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
