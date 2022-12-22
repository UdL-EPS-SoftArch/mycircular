import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Message } from "./message";

@Injectable({providedIn: 'root'})
export class MessageService extends HateoasResourceOperation<Message> {

  constructor() {
    super(Message);
  }
  public findByText(query: string): Observable<ResourceCollection<Message>> {
    return this.searchCollection("findByText", { params: { text: query } })
  }
}
