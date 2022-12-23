import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request';

@Component({
  selector: 'app-requests-delete',
  templateUrl: './requests-delete.component.html',
  styleUrls: ['./requests-delete.component.css']
})
export class RequestsDeleteComponent implements OnInit {
  public request: Request = new Request();
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestService: RequestService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.requestService.getResource(this.id).subscribe(
      (request: Request) =>
        this.request = request
    );
  }

  delete(): void {
    this.requestService.deleteResource(this.request).subscribe(
      () => {
        this.router.navigate(['/requests']);
      });
  }

}
