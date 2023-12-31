import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { AuthService } from 'src/app/Services/auth.service';
import { UserForLogin } from 'src/app/model/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private alertify:AlertifyService,
              private router:Router) { }

  ngOnInit() {
  }

  onLogin(loginForm:NgForm) {
    console.log(loginForm.value);
    this.authService.authUser(loginForm.value).subscribe(
      (response:UserForLogin) => {
        console.log(response);
        const user = response;
        if(user){
        localStorage.setItem('token', user.token)
        localStorage.setItem('userName', user.userName)
        this.alertify.success('Login Successfull');
        this.router.navigate(['/'])
        }
      }
    );
    // console.log('Login info filled',loginForm.value);
    // if(token){
    //   localStorage.setItem('token',token.userName)
    //  this.alertify.success('Login Successfull');
    //  this.router.navigate(['/'])
    // }
    //   else
    // {
    //   this.alertify.error('Login failed');
    // }

  }
}
