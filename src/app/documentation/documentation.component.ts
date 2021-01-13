import { Component, OnInit } from '@angular/core';
import { AeSideNav } from 'ae-material';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent implements OnInit {
  constructor() {}
  buttons = [
    { value: 'address', link: 'address' },
    { value: 'Subscription ', link: 'subscription' },
    { value: 'Date Picker', link: 'date' },
    { value: 'Task', link: 'task' },
    { value: 'Signin', link: 'signin' },
  ];
  ngOnInit(): void {}
}
