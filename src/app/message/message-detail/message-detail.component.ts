import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService} from "../message.service";
import { Message} from "../message";
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html'
})
export class MessageDetailComponent implements OnInit {
  public message: Message = new Message();

  constructor(private route: ActivatedRoute,
              private messageService: MessageService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.messageService.getResource(id).subscribe(
      message => {
        this.message = message;
      });
  }


}
