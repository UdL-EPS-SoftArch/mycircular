import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { UserService } from 'src/app/user/user.service';
import { AnnouncementService } from '../../announcement/announcement.service';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { Announcement } from 'src/app/announcement/announcement';
import { User } from 'src/app/login-basic/user';

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
    if (this.transaction.price < 0) {
      alert('Price must be greater than 0');
      return;
    }

    this.transactionService.createResource({ body: this.transaction }).subscribe(
      (transaction: Transaction) => this.router.navigate(['transactions', transaction.id]));
  }
}