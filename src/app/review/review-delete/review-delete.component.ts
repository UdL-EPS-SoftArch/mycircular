import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-delete',
  templateUrl: './review-delete.component.html',
  styleUrls: ['./review-delete.component.css']
})

export class ReviewDeleteComponent implements OnInit {

  public review: Review = new Review();
  private id: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.reviewService.getResource(this.id).subscribe(
      r => this.review = r
    );
  }

  delete(): void {
    this.reviewService.deleteResource(this.review).subscribe(() => {
      this.router.navigate(['/reviews']);
    });
  }
}
