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
  public currentUsername: string = this.authenticationBasicService.getCurrentUser().id
  //todo creo que es un poco guarro
  public userParam : string = this.getUsernameParam()

  constructor(public router: Router,
              private requestService: RequestService,
              private authenticationBasicService: AuthenticationBasicService,
              private httpClient: HttpClientModule
              ) {
    //this.httpClient.get()
  }

  getUsernameParam(): string {
    return "?username=".concat(this.currentUsername)
  }

  ngOnInit(): void {

    console.log(this.userParam)
    this.requestService.customQuery(HttpMethod.GET, this.userParam)
      .subscribe(
        (requests: Request[]) => {
          for(let request of requests) {
            //todo limpiar estos logs
              console.log(request)
          }
          console.log("i got it")
          console.log(typeof requests)
          console.log(requests[0].name)
        }
      )
 //   console.log("holi")
 //   console.log(this.authenticationBasicService.getCurrentUser().id)

 //   this.fake()
/*
    this.requestService.getPage(
      {
        pageParams: {
          size: this.pageSize,
        },
        sort: {
          name: 'ASC'
        },
      }
    ).subscribe(
      (page: PagedResourceCollection<Request>) => {
        this.requests = page.resources;
        this.totalRequests = page.totalElements;
      }
    )

 */
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
//todo: esto de aqui quitarlo.
  /*
  Nota: en el backend tengo solo mapeada para obtener una request cuando le paos
  por parametro (con ?username=demo), pero no tengo mapeado requests/1.
  Tendria que añadir para que me retorne esa en concreto,
  o bien pasar siempre por parametro.
   */
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
