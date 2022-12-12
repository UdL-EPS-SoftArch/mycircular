import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService} from "../message.service";
import { Message} from "../message";
import { Observable, of, OperatorFunction } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { ResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-message-search',
  templateUrl: './message-search.component.html'
})

export class MessageSearchComponent {
  @Output() emitResults: EventEmitter<Message> = new EventEmitter();
  searchFailed = false;
  searching = false;

  constructor(private messageService: MessageService) {
  }

  autocomplete: OperatorFunction<string, readonly Message[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => term.length < 3 ? of([]) :
        this.messageService.findByMessage(term).pipe(
          map((collection: ResourceCollection<Message>) => collection.resources),
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
    this.emitResults.emit(item as Message);
  }
}
