import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Transaction } from '../transaction';
import {TransactionService} from "../transaction.service";
import {Observable, of, OperatorFunction} from "rxjs";
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from "rxjs/operators";
import {ResourceCollection} from "@lagoshny/ngx-hateoas-client";

@Component({
  selector: 'app-transaction-search',
  templateUrl: './transaction-search.component.html',
  styleUrls: ['./transaction-search.component.css']
})
export class TransactionSearchComponent{

  @Output() emitResults: EventEmitter<Transaction> = new EventEmitter();

  searchFailed = false;
  searching = false;

  constructor(private transactionService: TransactionService) { }
  /**
  autocomplete: OperatorFunction<string, readonly Transaction[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => term.length < 3 ? of([]) :
        this.transactionService.findbyDate(term).pipe(
          map((collection: ResourceCollection<Transaction>) => collection.resources),
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => this.searching = false )
    )
  **/
  select(item: any): void {
    this.emitResults.emit(item as Transaction);
  }
}
