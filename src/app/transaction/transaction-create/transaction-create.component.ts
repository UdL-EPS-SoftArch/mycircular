import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { UserService } from 'src/app/user/user.service';
import { AnnouncementService } from '../../announcement/announcement.service';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { Announcement } from 'src/app/announcement/announcement';
import { User } from 'src/app/login-basic/user';
import {ErrorMessageService} from '../../error-handler/error-message.service';


@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html'
})
export class TransactionCreateComponent implements OnInit {

  public transaction: Transaction;
  public announcement: Announcement;
  public userList: User[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private transactionService: TransactionService,
              private announcementService: AnnouncementService,
              private errorMessageService: ErrorMessageService,
              private userService: UserService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.transaction = new Transaction();
    this.announcementService.getResource(id).subscribe(
      announcement => {
        this.announcement = announcement;
      }
    );
    this.userService.getPage({ sort: { username: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<User>) => {
        this.userList = page.resources;
      });
  }


  onSubmit(): void {
    console.log(this.transaction);
    this.transaction.announcementAbout = this.announcement;
    if (this.transaction.price < 1) {
      this.errorMessageService.showErrorMessage('The price must be greater than 0');

      return;
    }
    if (this.transaction.price == null){
      this.errorMessageService.showErrorMessage('The transaction must have a price');
      return;
    }

    this.transactionService.createResource({ body: this.transaction }).subscribe(
      (transaction: Transaction) => this.router.navigate(['transactions', transaction.id]));
  }
}
