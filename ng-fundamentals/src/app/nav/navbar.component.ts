import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .nav .navbar {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
    `,
  ],
})
export class NavBarComponent {}
