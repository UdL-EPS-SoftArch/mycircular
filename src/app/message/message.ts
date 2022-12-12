import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('messages')
export class Message extends Resource {
  id: number;
  author: string;
  about: string;
  when: Date;
  text: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
