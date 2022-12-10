import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Review } from '../review';
import { ReviewService } from '../review.service';
import { User } from 'src/app/login-basic/user';

@Component({
  selector: 'app-review-update',
  templateUrl: './review-update.component.html',
  styleUrls: ['./review-update.component.css']
})
export class ReviewUpdateComponent implements OnInit {

  public review: Review = new Review();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private reviewService: ReviewService) { }

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    this.reviewService.getResource(id).subscribe(
      (r: Review) => this.review = r);

    this.reviewService.getResource(id).pipe(
      switchMap(r => {
        this.review = r;
        return this.review.getRelation<User>('about');
      }),
      switchMap((user: User) => {
        this.review.about = user;
        return this.review.getRelation<User>('author');
      })
    ).subscribe(user => {
      this.review.author = user;
    });

  }

  onSubmit() {
    this.reviewService.patchResource(this.review).subscribe(
      (patchedRating: Review) => {
        this.router.navigate(['reviews', patchedRating.id]);
      });
  }

  getCurrentReviewMessage(): string {
    return this.review.id;
  }

}
