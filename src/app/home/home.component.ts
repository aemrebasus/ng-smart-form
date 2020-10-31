import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AeSideNav } from 'ae-material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
