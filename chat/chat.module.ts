import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { NgShadowModule } from 'nativescript-ng-shadow';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { MessagesAreaComponent } from './messages-area/messages-area.component';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    ChatRoutingModule,
    NgShadowModule,
    TNSFontIconModule.forRoot({
      mdi: 'material-design-icons.css',
    }),
  ],
  declarations: [
    ChatComponent,
    MessagesAreaComponent,
    MessageBoxComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
})
export class ChatModule { }
