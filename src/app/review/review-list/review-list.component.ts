import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
import { Review } from '../review';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { UserService } from 'src/app/user/user.service';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';
import { User } from 'src/app/login-basic/user';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
})

export class ReviewListComponent implements OnInit {
  public reviews: Review[] = [];
  public pageSize = 5;
  public page = 1;
  public totalRatings = 0;


  constructor(
    public router: Router,
    private reviewService: ReviewService,
    private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.reviewService.getPage({ pageParams: { size: this.pageSize }, sort: { username: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Review>) => {
        this.reviews = page.resources;
        this.totalRatings = page.totalElements;
        

        this.reviews.map(review => {
          review.getRelation('author').subscribe((user: User) => {
            review.author = user;
          });
        });

        this.reviews.map(review => {
          review.getRelation('about').subscribe((user: User) => {
            review.about = user;
          });
        });
      });

    }
    
    isRole(role: string): boolean {
      return this.authenticationService.isRole(role);
    }

    
  


}
