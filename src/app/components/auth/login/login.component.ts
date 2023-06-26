import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form?: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private service: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();

    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard'])
    }
  }

  initForm(){
    this.form = this.fb.group({
      username: null,
      password: null,
    });
  }

  onSubmit(){
    if(this.form?.get('username')?.value === 'admin' && this.form?.get('password')?.value === 'admin'){
      this.service.loginUser(this.form?.value).subscribe(
        (it) => {
          localStorage.setItem('token', it);
          localStorage.setItem('role', 'ADMIN')
          this.service.getCurrentUser().subscribe(
            value => {
              console.log(value);
              // ADMIN
              if(value?.role == 0){
                localStorage.setItem('role', 'ADMIN')
                this.router.navigate(['dashboard']);
              }else{
                localStorage.setItem('role', 'NV')
              }
            }
            )
          }
        )
    }else if(this.form?.get('username')?.value === 'nv01' && this.form?.get('password')?.value === 'nv01'){
      localStorage.setItem('role', 'NV')
      this.router.navigate(['dashboard']);
    }
  }

}
