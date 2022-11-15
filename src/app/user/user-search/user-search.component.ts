import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../login-basic/user';
import { Observable, of, OperatorFunction } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { ResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html'
})

export class UserSearchComponent {
  @Output() emitResults: EventEmitter<User> = new EventEmitter();
  searchFailed = false;
  searching = false;

  constructor(private userService: UserService) {
  }

  autocomplete: OperatorFunction<string, readonly User[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => term.length < 3 ? of([]) :
        this.userService.findByUsernameContaining(term).pipe(
          map((collection: ResourceCollection<User>) => collection.resources),
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => this.searching = false )
    )

  select(item: any): void {
    this.emitResults.emit(item as User);
  }
}
