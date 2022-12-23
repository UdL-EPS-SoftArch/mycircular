import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRequest } from "../product-request";
import { ProductRequestService } from "../product-request.service";

@Component({
  selector: 'app-product-requests-delete',
  templateUrl: './product-requests-delete.component.html',
  styleUrls: ['./product-requests-delete.component.css']
})
export class ProductRequestsDeleteComponent implements OnInit {
  public productRequest: ProductRequest = new ProductRequest();
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productRequestService: ProductRequestService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productRequestService.getResource(this.id).subscribe(
      (productRequest: ProductRequest) =>
        this.productRequest = productRequest
    );
  }

  delete(): void {
    this.productRequestService.deleteResource(this.productRequest).subscribe(
      () => {
        this.router.navigate(['/requests']);
      });
  }

}
