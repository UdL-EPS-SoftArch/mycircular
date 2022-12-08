import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../review';
import { ReviewService } from '../review.service';

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
    const message = this.route.snapshot.paramMap.get('message');
    this.reviewService.getResource(message).subscribe(
      (r: Review) => this.review = r );
  }

  onSubmit(){
    this.reviewService.patchResource(this.review).subscribe(
      (patchedRating: Review) => {
        this.router.navigate(['reviews', patchedRating.id]);
      });
  }

  getCurrentReviewMessage(): string {
    return this.review.message;
  }

}
