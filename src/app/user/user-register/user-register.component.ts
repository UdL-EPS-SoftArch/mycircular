import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { UserService } from '../user.service';
import { User } from '../../login-basic/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html'
})
export class UserRegisterComponent implements OnInit {
  public user: User;

  constructor(private router: Router,
              private location: Location,
              private userService: UserService,
              private authenticationBasicService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit(): void {
    this.user.username = this.user.id;
    this.userService.createResource({ body: this.user }).subscribe(
      () => {
        this.authenticationBasicService.login(this.user.id, this.user.password).subscribe(
            (user: User) => this.router.navigate(['users', user.id]));
      });
  }

  onCancel(): void {
    this.location.back();
  }
}
