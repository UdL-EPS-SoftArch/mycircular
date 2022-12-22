import { Component, OnInit } from '@angular/core';
import {Transaction} from "../transaction";
import {ActivatedRoute, Router} from "@angular/router";
import {TransactionService} from "../transaction.service";
import {User} from "../../login-basic/user";

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
})
export class TransactionEditComponent implements OnInit {
  public transaction: Transaction = new Transaction();
  public dateOptions = { };
  public statusOptions = ["INITIALIZED", "IN_PROGRESS", "CLOSED", "CANCELED" ];
  public statusChanges = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
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
        for (let i=0; i<this.statusOptions.length;i++) {
          if(this.transaction.status != this.statusOptions[i]){
            this.statusChanges.push(this.statusOptions[i])
          }
        }
      });
  }

  getCurrentTransaction(): Transaction{
    return this.transaction;
  }

  getStateList(){
    return this.statusChanges;
  }
  onSubmit(): void{
    this.transactionService.patchResource(this.transaction).subscribe(
      (patchedTransaction: Transaction) => {
        this.router.navigate(['transactions',patchedTransaction.id])
      });
  }
}
