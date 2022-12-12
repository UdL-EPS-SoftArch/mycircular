import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { User } from 'src/app/login-basic/user';
import { Review } from '../review';
import { ReviewService } from '../review.service';
import { Input } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css']
})
export class ReviewCreateComponent implements OnInit {

  public review: Review = new Review();
  public user: User = new User();
  public about : User = new User();

  constructor(private router: Router,
    private authenticationService: AuthenticationBasicService,
    private reviewService: ReviewService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.user.id = this.getCurrentUserName();

  }

  onSubmit(): void {
    this.review.author = this.authenticationService.getCurrentUser();
    this.reviewService.createResource({ body: this.review }).subscribe(() => this.router.navigate(['/reviews']));
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }
}
