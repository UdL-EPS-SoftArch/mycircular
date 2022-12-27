import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { UserService } from 'src/app/user/user.service';
import { ReviewService } from 'src/app/review/review.service';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  public admins: Admin[] = [];
  public pageSize = 4;
  public page = 1;
  public totalAdmins = 0;


  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getPage({ pageParams: { size: this.pageSize }, sort: { username: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Admin>) => {
        this.admins = page.resources;
        this.totalAdmins = page.totalElements;
      });
  }



}
