import { style } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {


  @Input() collapsed = false;
  @Input() screenWidth = 0;

  isLoggin():boolean{
    return localStorage.getItem('token') !== null;
  }

  constructor(private router: Router){

  }

  ngOnInit(){
    if(!localStorage.getItem('token')){
      this.router.navigate(['login'])
    }
  }

  getBodyClass(): string{
    let styleClass = 'body';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = "body-md-screen";
    }
    return styleClass;
  }
}
