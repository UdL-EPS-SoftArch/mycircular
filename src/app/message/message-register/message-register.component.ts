import {Component, OnInit} from "@angular/core";
import {Message} from "../message";
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { User } from 'src/app/login-basic/user';
import { UserService } from 'src/app/user/user.service';
import {Router} from "@angular/router";
import {MessageService} from "../message.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-message-register',
  templateUrl:"./message-register.component.html",
})
export class MessageRegisterComponent implements OnInit{
  public user: User = new User();
  public message : Message;
  constructor(private authenticationService: AuthenticationBasicService,
              private router: Router,
              private location: Location,
              private userService: UserService,
              private messageService: MessageService) {
  }
  ngOnInit(): void {
    this.message = new Message();
    this.user.id = this.getCurrentUserName();
  }
  onSubmit() : void {
    this.message.user = this.authenticationService.getCurrentUser();
    this.messageService.createResource({body: this.message}).subscribe(
      (message: Message) => this.router.navigate([message.uri]));
  }
  onCancel(): void{
    this.location.back();
  }

  private getCurrentUserName() {
    return this.authenticationService.getCurrentUser().id;
  }
}
