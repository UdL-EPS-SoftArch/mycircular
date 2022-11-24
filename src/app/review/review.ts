import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('reviews')
export class Review extends Resource {
  id: string;
  author: string
  about: string
  nStars: number
  message?: string

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
