import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { navbarData } from 'src/app/navigation';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  screenWidth = 0;

  collapsed = false;

  navData = navbarData;

  constructor(private router: Router){
  }

  toggleCollapse(){
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  isLoggin():boolean{
    return localStorage.getItem('token') !== null;
  }

  closeSidenav(){
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  signOut(){
    this.router.navigate(['login']);
    localStorage.clear();
  }
}
