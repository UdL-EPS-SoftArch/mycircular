import {Component, EventEmitter, Output} from '@angular/core';
import {RequestService} from "../request.service";
import {Request} from "../request";
import {Observable, of, OperatorFunction} from "rxjs";
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from "rxjs/operators";
import {HttpMethod, ResourceCollection} from "@lagoshny/ngx-hateoas-client";
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";


@Component({
  selector: 'app-requests-search',
  templateUrl: './requests-search.component.html',
  styleUrls: ['./requests-search.component.css']
})
export class RequestsSearchComponent {

  @Output() emitResults: EventEmitter<Request> = new EventEmitter();
  searchFailed = false;
  searching = false;
  private currentUsername: string = this.authenticationService.getCurrentUser().id
  private userParam: string = "?username=".concat(this.currentUsername)

  constructor(private requestService: RequestService,
              private authenticationService: AuthenticationBasicService) {
  }

  autocomplete: OperatorFunction<string, readonly Request[]> = (text$: Observable<string>) =>

    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => term.length < 3 ? of([]) :

         this.requestService.customQuery(HttpMethod.GET, term).pipe(
        //this.requestService.customQuery(HttpMethod.GET, this.userParam.concat('&name=').concat(term)).pipe(
          //this.requestService.findByNameContaining(term).pipe(
          map((collection: ResourceCollection<Request>) => collection.resources),
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => this.searching = false)
    )

  select(item: any): void {
    this.emitResults.emit(item as Request);
  }


}
