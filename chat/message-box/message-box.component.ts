import { Component, Inject, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ns-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css'],
})
export class MessageBoxComponent {
  constructor(@Inject('platform') public platform) {}
}
