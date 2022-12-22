import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Announcement } from './announcement'

@Injectable({providedIn: 'root'})
export class AnnouncementService extends HateoasResourceOperation<Announcement> {

  constructor() {
    super(Announcement);
  }
  public findByName(query: string): Observable<ResourceCollection<Announcement>> {
    return this.searchCollection("findByName", { params: { name: query } })
  }





}
