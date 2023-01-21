import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { Transaction } from '../transaction';
import {TransactionService} from "../transaction.service";
import {TransactionListComponent} from "../transaction-list/transaction-list.component";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-transaction-search',
  templateUrl: './transaction-search.component.html',
})
export class TransactionSearchComponent{

  @Output() emitResults: EventEmitter<Transaction> = new EventEmitter();

  searchFailed = false;
  searching = false;
  selectedDate;
  currentUrl: string;


  constructor(private transactionService: TransactionService,
              private route: ActivatedRoute,
              private listComponent: TransactionListComponent) {
    this.selectedDate = transactionService.selectedDate
  }

  updateList(){
    this.transactionService.setSelectedDate(this.selectedDate);
  }

ngOnInit(){
    this.route.url.subscribe(url=>{
      this.currentUrl = url[0].path;
    })
  }
}
