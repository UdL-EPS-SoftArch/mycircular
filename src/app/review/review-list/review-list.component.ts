import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
import { Review } from '../review';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
})

export class ReviewListComponent implements OnInit {
  public reviews: Review[] = [];
  public pageSize = 5;
  public page = 1;
  public totalUsers = 0;

  constructor(
    public router: Router,
    private reviewService: ReviewService) {
  }

  ngOnInit(): void {
    this.reviewService.getPage({ pageParams:  { size: this.pageSize }, sort: { username: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Review>) => {
        this.reviews = page.resources;
        this.totalUsers = page.totalElements;
      });
  }
}
