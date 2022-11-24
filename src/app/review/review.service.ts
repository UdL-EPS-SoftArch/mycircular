import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { HateoasResourceOperation, ResourceCollection } from "@lagoshny/ngx-hateoas-client";
import { Review } from "./review";

@Injectable({providedIn: "root"})
export class ReviewService extends HateoasResourceOperation<Review> {

  constructor() {
    super(Review);
  }

  public findByUsernameContaining(query: string): Observable<ResourceCollection<Review>> {
    return this.searchCollection("findByUsernameContaining", { params: { text: query } })
  }

}