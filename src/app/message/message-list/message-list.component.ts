import { Component, OnInit} from "@angular/core";
import {Router, Params, ActivatedRoute} from "@angular/router";
import {Message} from "../message";
import {AuthenticationBasicService} from "../../login-basic/authentication-basic.service";
import {PagedResourceCollection} from "@lagoshny/ngx-hateoas-client";
import {MessageService} from "../message.service";
import {User} from "../../login-basic/user";
import {Announcement} from "../../announcement/announcement";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
})
export class MessageListComponent implements OnInit{
  public messages: Message[] = [];
  public pageSize = 5;
  public page = 1;
  public totalMessages = 0;
  public messagePagedResource: PagedResourceCollection<Message>;
  constructor(
    public router: Router,
    private messageService: MessageService,
    private authenticationService: AuthenticationBasicService,
    public activatedRoute: ActivatedRoute,) {

  }
  ngOnInit():void {
    this.messageService.getPage({pageParams:{size: this.pageSize},sort:{name:'ASC'}}).subscribe(
      (page:PagedResourceCollection<Message>) => {
        this.messagePagedResource =page;
        this.messages =page.resources;
        this.totalMessages = page.totalElements;


        this.messages.map(message => {
          message.getRelation('user').subscribe((user: User) => {
            message.user = user;
          });
        });
        this.messages.map(message => {
          message.getRelation('product').subscribe((product: Announcement) => {
            message.product = product;
          });
        });

      });
  }
  changePage(): void {
    this.messagePagedResource.customPage({pageParams: {page: this.page -1, size:this.pageSize}, sort:{name: 'ASC'}}).subscribe(
      (page: PagedResourceCollection<Message>) =>{
        this.messages = page.resources;
        this.messages.map(message => {
          message.getRelation('user').subscribe((user: User) => {
            message.user = user;
          });
        });
        this.messages.map(message => {
          message.getRelation('product').subscribe((product: Announcement) => {
            message.product = product;
          });
        });
      });
  }
  modifyList(messagePagedResource: PagedResourceCollection<Message>):void{
    this.messagePagedResource = messagePagedResource;
    this.messages = this.messagePagedResource.resources;
    this.totalMessages = this.messagePagedResource.totalElements;
  }
  isRole(role:string): boolean {
    return this.authenticationService.isRole(role);
  }


  detail(message: Message) {
    this.router.navigate([message.uri]);
  }
}
