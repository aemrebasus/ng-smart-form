import { Component, OnInit } from '@angular/core';
import { AeSideNav } from 'ae-material';
import { CONTACT_FORM } from './a-contact-form';
import { SIGNIN_FORM } from './a-signin-form';
import { SUBSCRIPTION_FORM } from './a-subscription-form';
import { TASK_FORM } from './a-task-form';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public contactForm = CONTACT_FORM;
  public signinForm = SIGNIN_FORM;
  public subscriptionForm = SUBSCRIPTION_FORM;
  public taskForm = TASK_FORM;
  public currentForm = 'contact';



  public navbar: AeSideNav = {
    list: {
      list: [
        { value: 'Login Form', icon: 'login', action: () => this.currentForm = 'login' },
        { value: 'Contact Form', icon: 'contact_mail', action: () => this.currentForm = 'contact' },
        { value: 'Subscription Form', icon: 'subscriptions', action: () => this.currentForm = 'subscription' },
        { value: 'Task Form', icon: 'check', action: () => this.currentForm = 'task' },
      ]
    },
    toolbar: {
      list: []
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
