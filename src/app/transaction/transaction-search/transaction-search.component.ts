import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { Transaction } from '../transaction';
import {TransactionService} from "../transaction.service";
import {TransactionListComponent} from "../transaction-list/transaction-list.component";



@Component({
  selector: 'app-transaction-search',
  templateUrl: './transaction-search.component.html',
})
export class TransactionSearchComponent{

  @Output() emitResults: EventEmitter<Transaction> = new EventEmitter();

  searchFailed = false;
  searching = false;
  selectedDate;


  constructor(private transactionService: TransactionService,
              private listComponent: TransactionListComponent) {
    this.selectedDate = transactionService.selectedDate
  }

  updateList(){
    this.transactionService.setSelectedDate(this.selectedDate);
    this.listComponent.ngOnInit();
  }

}
