import { HateoasResource, Resource } from "@lagoshny/ngx-hateoas-client";
import { User } from "../login-basic/user";

@HateoasResource("transactions")
export class Transaction extends Resource {
  id: number;
  uri: string;
  creationDate: Date;
  price: number;
  status: string;
  // announcementAbout: Announcement;
  seller: User;
  buyer: User;

  constructor(values: Object = {}) {
    super();
    Object.assign(this as any, values)
  }
}
