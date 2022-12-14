import { Component, OnInit } from '@angular/core';
import {Transaction} from "../transaction";
import {ActivatedRoute} from "@angular/router";
import {TransactionService} from "../transaction.service";
import {User} from "../../login-basic/user";

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {
  public transaction: Transaction = new Transaction();
  public dateOptions = { };
  public statusOptions = [ ];

  constructor(private route: ActivatedRoute,
              private transactionService: TransactionService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.transactionService.getResource(id).subscribe(
      transaction => {
        transaction.getRelation('seller').subscribe((seller: User) => {
          transaction.seller = seller;
        });
        transaction.getRelation('buyer').subscribe((buyer: User) => {
          transaction.buyer = buyer;
        });
        transaction.creationDate = new Date(transaction.creationDate);
        this.transaction = transaction;
        this.dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        this.statusOptions = ["INITIALIZED", "IN_PROGRESS", "CLOSED", "CANCELED"]
      });
  }

  getCurrentTransaction(): Transaction{
    return this.transaction;
  }

  getStateList(){
    return this.statusOptions;
  }
  onSubit(): void{

  }
}
