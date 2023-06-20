import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './navigation';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'windfood_ver1';

  isSideNavCollapsed = false;
  screenWidth = 0;

  dataStorage = localStorage.getItem('token');

  ngOnInit(){

  }

  isLogin() : boolean{
    return !!localStorage.getItem('token');
  }

  getCurrentRole(){
    return localStorage.getItem('role');
  }

  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
