import { Component, OnInit } from '@angular/core';
import { AeSideNav } from 'ae-material';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {


  constructor() { }
  public navbar: AeSideNav = {
    list: {
      list: [
        { value: 'Login Form', icon: 'login', route: 'login' },
        { value: 'Contact Form', icon: 'contact_mail', route: 'contact' },
        { value: 'Subscription Form', icon: 'subscriptions', route: 'subscription' },
        { value: 'Task Form', icon: 'check', route: 'task' },
        { value: 'Comment Form', icon: 'comment', route: 'comment' },
        { value: 'Address Form', icon: 'location_city', route: 'address' },
      ]
    },
    toolbar: {
      list: []
    }
  };
  ngOnInit(): void {
  }

}
