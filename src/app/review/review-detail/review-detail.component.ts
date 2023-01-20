import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../review.service';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Review } from '../review';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/login-basic/user';


@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {
  public reviews: Review = new Review();
  public pageSize = 5;
  public page = 1;
  public totalRatings = 0;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.reviewService.getResource(id).pipe(
      switchMap(r => {
        this.reviews = r;
        return this.reviews.getRelation<User>('about');
      }),
      switchMap((user: User) => {
        this.reviews.about = user;
        return this.reviews.getRelation<User>('author');
      })
    ).subscribe(user => {
      this.reviews.author = user;
    });

  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }

  currentUserEdit(){
    return this.getCurrentUserName() == this.reviews.author.id;
  }

}

