import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import {UserService} from "../../user/user.service";
import {User} from "../../login-basic/user";

@Component({
  selector: 'app-requests-detail',
  templateUrl: './requests-detail.component.html',
  styleUrls: ['./requests-detail.component.css']
})
export class RequestsDetailComponent implements OnInit {

  public request: Request = new Request();

  constructor(private route: ActivatedRoute,
              private requestService: RequestService,
              private authenticationService: AuthenticationBasicService
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.requestService.getResource(id).subscribe(
      (request) => {
        this.request = request
        //console.log(this.request.id, this.request, request)
       // this.request.id = id
      }
    )

    this.printsDeMierda()
    this.getCurrentUser()



  }

  printsDeMierda() {
  //  console.log(typeof this.request)
    console.log(this.request)
   // console.log(id)
  //  console.log(this.request.id, typeof this.request.id)
    console.log(this.request.requester)
  //  console.log()

  }

  getCurrentUser(): User {
    console.log(this.authenticationService.getCurrentUser())
    return this.authenticationService.getCurrentUser();
  }

}
