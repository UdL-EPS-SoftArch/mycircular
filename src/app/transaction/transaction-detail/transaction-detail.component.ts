import { TransactionService } from '../transaction.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { User } from 'src/app/login-basic/user';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
})
export class TransactionDetailComponent implements OnInit {
  public transaction: Transaction = new Transaction();
  public dateOptions = { };

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

      });
  }

  getCurrentTransaction(): Transaction{
    return this.transaction;
  }

}
