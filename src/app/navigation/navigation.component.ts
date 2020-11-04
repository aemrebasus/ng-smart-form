import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() baseRoute = '';
  @Input() logo;
  @Input() buttons = [
    { value: 'Documentation', link: 'doc' }
  ];
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  navigate(route: string): void {
    console.log(route);
    this.router.navigate([this.baseRoute, route]);
  }
}
