import { Component, Inject, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    @Inject('platform') public platform,
  ) {}
}
