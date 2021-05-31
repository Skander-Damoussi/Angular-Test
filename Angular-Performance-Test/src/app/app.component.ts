import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

declare global {
  interface Window { strum: Function; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-Performance-Test';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        window['strum']('routeChange', event.url);
      }
    });
  }
}
