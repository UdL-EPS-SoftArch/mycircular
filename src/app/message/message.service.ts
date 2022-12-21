import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Message } from "./message";

@Injectable({providedIn: 'root'})
export class MessageService extends HateoasResourceOperation<Message> {

  constructor() {
    super(Message);
  }
  public findById(query: string): Observable<ResourceCollection<Message>> {
    return this.searchCollection("findById", { params: { review: query } })
  }
}
