import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('message')
export class Message extends Resource {
  id: string;
  author: string
  about: string
  when: string
  text?: string

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
