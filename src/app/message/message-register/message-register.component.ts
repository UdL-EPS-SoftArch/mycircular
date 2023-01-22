import {Component, OnInit} from "@angular/core";
import {Message} from "../message";
import {AuthenticationBasicService} from 'src/app/login-basic/authentication-basic.service';
import {User} from 'src/app/login-basic/user';
import {UserService} from 'src/app/user/user.service';
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../message.service";
import {Location} from "@angular/common";
import {Announcement} from "../../announcement/announcement";
import {AnnouncementService} from "../../announcement/announcement.service";


@Component({
  selector: 'app-message-register',
  templateUrl: "./message-register.component.html",
})
export class MessageRegisterComponent implements OnInit {
  public user: User = new User();
  public message: Message;
  public product: Announcement;
  public productname = "";

  constructor(private authenticationService: AuthenticationBasicService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private userService: UserService,
              private messageService: MessageService,
              private announcementService: AnnouncementService) {
  }

  ngOnInit(): void {
    this.message = new Message();
    this.user.id = this.getCurrentUserName();
    //product
  }

  onSubmit(): void {
    this.message.user = this.authenticationService.getCurrentUser();
    this.message.when = new Date();
    this.announcementService.findByName(this.productname).subscribe(announcement => {
      this.message.product = announcement.resources[0];
      this.messageService.createResource({body: this.message}).subscribe(message => {
        this.router.navigate([message.uri]);
      });
    });
  }

  onCancel(): void {
    this.location.back();
  }

  private getCurrentUserName() {
    return this.authenticationService.getCurrentUser().id;
  }


}
