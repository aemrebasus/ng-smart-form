import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AeSideNav } from 'ae-material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  buttons = [
    { value: 'Documentation', link: 'doc' },
    { value: 'about', link: 'about' },
    { value: 'contact', link: 'contact' }
  ];

  constructor(public router: Router) {

  }
  ngOnInit(): void {

  }

  

}
