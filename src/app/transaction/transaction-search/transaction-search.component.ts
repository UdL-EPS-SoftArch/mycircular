import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Transaction } from '../transaction';
import {TransactionService} from "../transaction.service";
import {Observable, of, OperatorFunction} from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import {User} from "../../login-basic/user";

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

}
