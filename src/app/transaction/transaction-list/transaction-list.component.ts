import { User } from '../../login-basic/user';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  public transactionPagedResource: PagedResourceCollection<Transaction>;
  public transactionList: Transaction[];
  public transactionSize = 0;
  public pageSize = 5;
  public page = 0;
  public currentUsername = this.authenticationService.getCurrentUser().id;
  public dateOptions = {};


  constructor(public router: Router,
              private transactionService: TransactionService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.transactionService.searchPage('findByBuyer_UsernameOrSeller_Username', { params: { buyerUsername: this.currentUsername, sellerUsername: this.currentUsername },
      pageParams: { page: this.page, size: this.pageSize },
      sort: {name: 'DESC'}}).subscribe(
      (page: PagedResourceCollection<Transaction>) => {
        this.transactionPagedResource = page;

        this.transactionList = page.resources;
        this.transactionSize = page.totalElements;
        this.transactionList.map(transaction => {
          transaction.getRelation('seller').subscribe((seller: User) => {
            transaction.seller = seller;
          });
          transaction.getRelation('buyer').subscribe((buyer: User) => {
            transaction.buyer = buyer;
          });
          transaction.creationDate = new Date(transaction.creationDate);
        });
      }
    );
    this.dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  }

  changePage() {
    this.transactionPagedResource.customPage({pageParams: {page: this.page - 1, size: this.pageSize}, sort: {name: 'DESC'}}).subscribe(
      (page: PagedResourceCollection<Transaction>) => {
        this.transactionList = page.resources;
        this.transactionSize = page.totalElements;
        this.transactionList.map(transaction => {
          transaction.getRelation('seller').subscribe((seller: User) => {
            transaction.seller = seller;
          });
          transaction.getRelation('buyer').subscribe((buyer: User) => {
            transaction.buyer = buyer;
          });
        }
        );
      }
    )
  }

    detail(transaction: Transaction) {
    this.router.navigate(['transactions',transaction.id]);
  }
}
