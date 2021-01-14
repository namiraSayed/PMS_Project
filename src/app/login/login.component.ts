import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { LoginService } from '../app-services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;


  loginForm = this.fb.group({
    userId: ['', Validators.required],
    password: ['', Validators.minLength(4)]
  })

  constructor(
    private fb: FormBuilder,
    // private loginService: LoginService,
    private router: Router
    ) { }

 
loginData: any;

submitLogin() {
  this.submitted = true;
  console.log(this.loginForm.controls, "controls")
  // stop here if form is invalid
  if (this.loginForm.invalid) {
    console.log('unauthorized')
      return;
  }

  // this.loginService.saveLoginData(this.loginForm.value)
  // this.loginService.getLogin();
  console.log(this.loginForm.value, 'submiteed!!!!!');
  this.router.navigate(['homepage'])

}
  ngOnInit(): void {
  }

}
