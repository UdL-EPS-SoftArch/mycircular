import { HateoasResource, Resource } from "@lagoshny/ngx-hateoas-client";
import { User } from "../login-basic/user";

@HateoasResource("transaction")
export class Transaction extends Resource {
  uri: string;
  creationDate: string;
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
