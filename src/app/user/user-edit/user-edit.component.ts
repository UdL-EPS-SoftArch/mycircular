import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { UserService } from '../user.service';
import { User } from '../../login-basic/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  public user: User = new User();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getResource(id).subscribe(
      (user: User) => this.user = user );
  }

  onSubmit(): void {
    this.user.password = this.user.passwordReset ? this.user.password : undefined; // Don't edit if not a reset
    this.userService.patchResource(this.user).subscribe(
      (patchedUser: User) => {
        if (this.user.passwordReset) {
          this.authenticationService.logout();
          this.authenticationService.login(this.user.id, this.user.password).subscribe(
            (user: User) => this.router.navigate(['users', user.id]));
        } else {
          this.router.navigate(['users', patchedUser.id]);
        }
      });
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }
}
