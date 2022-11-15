import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../login-basic/user';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  public users: User[] = [];
  public pageSize = 5;
  public page = 1;
  public totalUsers = 0;

  constructor(
    public router: Router,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getPage({ pageParams:  { size: this.pageSize }, sort: { username: 'ASC' } }).subscribe(
        (page: PagedResourceCollection<User>) => {
          this.users = page.resources;
          this.totalUsers = page.totalElements;
        });
  }

  changePage(): void {
    this.userService.getPage({ pageParams: { page: this.page - 1, size: this.pageSize }, sort: { username: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<User>) => this.users = page.resources);
  }

  detail(user: User): void {
    this.router.navigate(['users', user.id]);
  }
}
