import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { ChatsComponent } from './chats/chats.component';
import { ShortWhenPipe } from './chats/short-when.pipe';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    HomeRoutingModule,
    TNSFontIconModule.forRoot({
      mdi: 'material-design-icons.css',
    }),
  ],
  declarations: [
    HomeComponent,
    TabsComponent,
    ChatsComponent,
    ShortWhenPipe,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
})
export class HomeModule { }
