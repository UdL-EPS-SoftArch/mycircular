import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {RequestService} from '../request.service';
import {Request} from '../request';
import {HttpMethod, PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';
//esto creo que es una cutrada
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";


import {HttpClientModule} from "@angular/common/http";
import {User} from "../../login-basic/user";

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestsListComponent implements OnInit {

  public requests: Request[] = [];
  public pageSize = 5;
  public page = 1;
  public totalRequests = 0;

  constructor(public router: Router,
              private requestService: RequestService,
              private authenticationBasicService: AuthenticationBasicService,
              private httpClient: HttpClientModule
              ) {
    //this.httpClient.get()
  }

  ngOnInit(): void {

 //   console.log("holi")
 //   console.log(this.authenticationBasicService.getCurrentUser().id)

 //   this.fake()

    this.requestService.getPage(
      {
        pageParams: {
          size: this.pageSize,
          //username: this.authenticationBasicService().getCurrentUser().id,
        },
        sort: {
          name: 'ASC'
        },
        /*
        username: {
          username: this.authenticationBasicService.getCurrentUser().id
        }

         */
      }
    ).subscribe(
      (page: PagedResourceCollection<Request>) => {
        this.requests = page.resources;
        this.totalRequests = page.totalElements;
 //       console.log("me cago en todo" + this.requests);
      }
    )
  }

  changePage(): void {
    this.requestService.getPage({
      pageParams: {page: this.page - 1, size: this.pageSize},
      sort: {name: 'ASC'}
    }).subscribe(
      (page: PagedResourceCollection<Request>) => {
        this.requests = page.resources;
        console.log(this.requests)
      }
    )
  };


  detail(request: Request): void {
    this.router.navigate(['requests', request.id]);
  }

  fake(): void {
    console.log("empecemos")
    this.requestService.customQuery(HttpMethod.GET, '1')
      .subscribe(
        (users: User) => {
          console.log(users.id)
        }
  )
  }

}
