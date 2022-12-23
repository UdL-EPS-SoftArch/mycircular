import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {RequestService} from '../request.service';
import {Request} from '../request';
import {Location} from '@angular/common';
import {UserService} from "../../user/user.service";
import {User} from "../../login-basic/user";

@Component({
  selector: 'app-requests-register',
  templateUrl: './requests-register.component.html',
  styleUrls: ['./requests-register.component.css']
})
export class RequestsRegisterComponent implements OnInit {

  public request: Request;

  constructor(private router: Router,
              private location: Location,
              private requestService: RequestService,
              private authenticationBasicService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.request = new Request();
  }

  onSubmit(): void {
    //this.createRequest()
    this.popUp()
  }

  popUp(): void {
    console.log('intento de popup')
    let submit = confirm("Do you want to request this offer?");
    if(submit) {
      console.log("createRequest")
      this.createRequest()
    } else {
      console.log("nothing happens")
    }

  }

  createRequest(): void {
    this.request.description = "test_description"
    this.request.name = "test_name"
    this.request.price = 0.0
    this.request.requester = this.authenticationBasicService.getCurrentUser()
    this.requestService.createResource(
      {
        body: this.request
      }
    ).subscribe(
      () => {
        //aqui creo que no tengo que controlar que esté loggeado y esas vainas
        console.log("creo que ha salido bien ", this.request, this.request.requester)
      });
  }

  onCancel(): void {
    this.location.back();
  }

}
