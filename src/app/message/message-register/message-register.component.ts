import {Component, OnInit} from "@angular/core";
import {Message} from "../message";
import {Router} from "@angular/router";
import {MessageService} from "../message.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-message-register',
  templateUrl:"./message-register.component.html",
})
export class MessageRegisterComponent implements OnInit{
  public message : Message;
  constructor(private router: Router,
              private location: Location,
              private messageService: MessageService) {
  }
  ngOnInit(): void {
    this.message = new Message();
  }
  onSubmit() : void {
    this.messageService.createResource({body: this.message}).subscribe(
      (message: Message) => this.router.navigate(['messages', message.id]));
  }
  onCancel(): void{
    this.location.back();
  }
}
