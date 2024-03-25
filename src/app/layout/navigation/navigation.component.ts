import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationService } from './navigation.service';
import { RegisterService } from '../register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @ViewChild('leftDrawer') leftDrawer!: MatDrawer;
  @ViewChild('bottomDrawer') bottomDrawer!: MatDrawer;

  constructor(
    public ns: NavigationService,
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getNavigation();
  }

  navigationList: any = [];

  getNavigation() {
    let json = {};
    this.ns.getNavigation(json).subscribe((res) => {
      if (res) {
        console.log('Nav received');
        this.navigationList = res;
        console.log(res);
      }
    });
  }

  toggleLeftDrawer() {
    this.leftDrawer.toggle();
  }

  toggleBottomDrawer() {
    this.bottomDrawer.toggle();
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }
}
