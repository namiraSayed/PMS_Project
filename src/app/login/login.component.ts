import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user= {
    email: '',
    password: ''
  }

  savelogin() {
    console.log(this.user, "user");
    this.router.navigate(['homepage']);
  }

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
