import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';
import { User } from '../login-basic/user';

@HateoasResource('reviews')
export class Review extends Resource {
  id: string;
  author: User
  about: User
  stars: number
  message?: string

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
