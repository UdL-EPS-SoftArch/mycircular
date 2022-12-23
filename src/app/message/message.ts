import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';
import {User} from "../login-basic/user";
import {Announcement} from "../announcement/announcement";

@HateoasResource('messages')
export class Message extends Resource {
  id: number;
  user: User;
  product: Announcement;
  when: Date;
  text: string;
  uri: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
