import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { Admin } from '../admin';
import { AdminService } from '../admin-list/admin.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {

  public admin: Admin = new Admin();


  constructor(private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.adminService.getResource(id).subscribe(
      (admin: Admin) => this.admin = admin);
  }

  onSubmit(): void {
    this.admin.password = this.admin.passwordReset ? this.admin.password : undefined;
    this.adminService.patchResource(this.admin).subscribe(
      (patchedAdmin: Admin) => {
        if (this.admin.passwordReset) {
          this.authenticationService.logout();
          this.authenticationService.login(this.admin.id, this.admin.password).subscribe(
            (admin: Admin) => this.router.navigate(['admins', admin.id]));
        }
        this.router.navigate(['admins', patchedAdmin.id]);
      });
    }
  }
