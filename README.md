# NativeScript WhatsApp Template ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn3.iconfinder.com/data/icons/logos-3/228/android-32.png)

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Dependencies][dependencies-image]][npm-url]
[![DevDependencies][dev-dependencies-image]][npm-url]
[![Twitter Follow][twitter-image]][twitter-url]

[npm-image]:http://img.shields.io/npm/v/nativescript-whatsapp-template.svg
[npm-url]:https://npmjs.org/package/nativescript-whatsapp-template
[downloads-image]:http://img.shields.io/npm/dt/nativescript-whatsapp-template.svg
[dependencies-image]:https://david-dm.org/Especializa/nativescript-whatsapp-template/status.svg
[dev-dependencies-image]:https://david-dm.org/Especializa/nativescript-whatsapp-template/dev-status.svg
[twitter-image]:https://img.shields.io/twitter/follow/especializa.svg?style=social&label=Follow%20us
[twitter-url]:https://twitter.com/especializa

## Installation
From the command prompt, start a new Nativescript project doing:
```sh
tns create your-project-name --template nativescript-whatsapp-template
```
## Introduction
[![N|Solid](https://udemy-images.udemy.com/course/750x422/1011174_0030_5.jpg)](https://www.udemy.com/angular-native)

This project is heavily based on [this repo](https://github.com/Especializa/nativesapp), created as part of the course:
- [Aprenda Angular 2 + Nativescript e crie um WhatsApp](https://www.udemy.com/angular-native)
**[CLICK HERE FOR ~90% OFF COUPON](https://www.udemy.com/angular-native/?couponCode=LANCAMENTO)**

At the moment, only available in Portuguese, but English version is coming soon.
Reach out to us on Twitter [![Twitter Follow][twitter-image]][twitter-url] if you want to push us to get it done sooner :)

### First run
Right after creating a project and then npm install, it should be ready to go. Just move into your project's folder and execute the normal `tns` command to run any app:
```sh
cd your-project-name
npm i
tns run
```
Alternatively you can target any specifc platform:
```sh
tns run android
```
```sh
tns run ios
```
That's pretty much what you should expect to see for the initial screen:
#### - Screenshot 1: Chats tab (iOS / Android)
[![N|Solid](https://raw.githubusercontent.com/Especializa/nativesapp/master/app/tools/assets/screenshot-1.png)](https://www.udemy.com/angular-native)

And that's the chat screen upon clicking on any chat item in the previous screen:
#### - Screenshot 2: Chat screen (iOS / Android)
[![N|Solid](https://raw.githubusercontent.com/Especializa/nativesapp/master/app/tools/assets/screenshot-2.png)](https://www.udemy.com/angular-native)
### Removing initial data
You might want to remove all the dummy data as well as some boilerplate code. The content shown relies upon the service `core/chats.services.ts` inside your `app` folder. Just replace the content returned there with what you need.
#### Emptying chats.services.ts
```javascript
import { Injectable } from '@angular/core';

import { Chat } from './models/chat.model';
import { Message } from './models/message.model';

@Injectable()
export class ChatsService {
  get chats(): Chat[] {
    return [];
  }
  getMessages(chat: Chat): Message[] {
    return [];
  }
}
```
Another advisable tweak is removing the line which slices the list of messages in the selected chat to get only a chunck of initial 50 ones. The reason for that is just to illustrate that not all messages should appear on landing on that screen, but we wouldn't like to sound too opinionated at this point telling you how to fetch and show your own data.
#### Replace the slice command on messages-area.component.ts
```diff
export class MessagesAreaComponent implements OnInit {
  // ...
  ngOnInit() {
-    this.messages = this.messages.slice(0, 50);
+    // your own code
  }
  // ...
}
```

## Changelog
- 1.0.0  Initial implementation

## License
Apache License Version 2.0, January 2004
