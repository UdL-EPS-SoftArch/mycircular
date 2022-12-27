import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  public admin: Admin = new Admin();

  constructor(private route: ActivatedRoute,
    private adminService: AdminService,
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.adminService.getResource(id).subscribe(
      admin => {
        this.admin = admin;
      });
  }

}
