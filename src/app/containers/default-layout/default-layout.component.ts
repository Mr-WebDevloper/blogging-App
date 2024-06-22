import { Component } from '@angular/core';

import {AdminItems} from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {

  public navItems: any;

  userData: any = localStorage.getItem('userDetails');
  userDetails: any = JSON.parse(this.userData);
  constructor() {

    // if (this.userDetails.role == "user") {
    //   this.navItems = UserItems;
    // }
    // if (this.userDetails.role == "admin") {
    // }
      this.navItems = AdminItems;
  
  }
}
