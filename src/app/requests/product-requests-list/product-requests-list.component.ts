import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {ProductRequestService} from '../product-request.service';
import {ProductRequest} from "../product-request";
import {HttpMethod, PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";

@Component({
  selector: 'app-product-requests-list',
  templateUrl: './product-requests-list.component.html',
  styleUrls: ['./product-requests-list.component.css']
})
export class ProductRequestsListComponent implements OnInit {

  public productRequests: ProductRequest[] = [];
  public pageSize: number = 5;
  public page: number = 1;
  public totalProdRequests: number = 0;
  public currentUsername: string = this.authenticationBasicService.getCurrentUser().id
  public userParam : string = this.getUsernameParam()

  constructor(public router: Router,
              private productRequestService: ProductRequestService,
              private authenticationBasicService: AuthenticationBasicService,
  ) {
  }

  getUsernameParam(): string {
    return "?username=".concat(this.currentUsername)
  }

  ngOnInit(): void {

    console.log(this.userParam)
    this.productRequestService.customQuery(HttpMethod.GET, this.userParam)
      .subscribe(
        (productRequests: ProductRequest[]) => {
          for(let productRequest of productRequests) {
            console.log(productRequest)
          }
          this.productRequests = productRequests
        }
      )
    console.log(this.productRequests)
  }

  //todo: corregir la paginacion
  changePage(): void {
    this.productRequestService.getPage({
      pageParams: {page: this.page - 1, size: this.pageSize},
      sort: {name: 'ASC'}
    }).subscribe(
      (page: PagedResourceCollection<ProductRequest>) => {
        this.productRequests = page.resources;
        console.log(this.productRequests)
      }
    )
  };


  detail(productRequests: ProductRequest): void {
    this.router.navigate(['prodRequests', productRequests.id]);
  }


}
