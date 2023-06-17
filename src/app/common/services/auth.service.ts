import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggin(): boolean{
    return !!localStorage.getItem('token')
  }
}
