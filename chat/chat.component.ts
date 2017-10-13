import { ChangeDetectionStrategy, Component,
         Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { Chat, ChatsService } from '../core';
import {Message} from '../core/models/message.model';

@Component({
  moduleId: module.id,
  selector: 'ns-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent implements OnInit {
  chatIndex: number;
  chat: Chat;
  unread: number;
  messages: Message[];

  constructor(
    private route: ActivatedRoute,
    private chatsService: ChatsService,
    private router: RouterExtensions,
    @Inject('platform') public platform,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.chatIndex = +params.index;
      this.chat = this.chatsService.chats[this.chatIndex];
    });
    this.route.queryParams.subscribe((params) => {
      this.unread = +params.unread;
    });
    this.getMessages();
  }

  getMessages() {
    this.messages = this.chatsService.getMessages(this.chat);
  }

  goBack() {
    this.router.back();
  }
}
