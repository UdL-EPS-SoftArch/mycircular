import { OfferService } from './../../offer/offer.service';
import { AnnouncementService } from '../../announcement/announcement.service';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { Announcement } from 'src/app/announcement/announcement';
import { Offer } from 'src/app/offer/offer';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html'
})
export class TransactionCreateComponent implements OnInit {

  public transaction: Transaction;
  public announcement: Announcement;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private transactionService: TransactionService,
              private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.transaction = new Transaction();
    this.announcementService.getResource(1).subscribe(
      announcement => {
        this.announcement = announcement;
      });
  }

  onSubmit(): void {}
}
