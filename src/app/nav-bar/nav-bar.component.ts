import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlertifyService } from '../Services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
  
})
export class NavBarComponent implements OnInit {

  loggedinUser:any;
  constructor(private router:Router,
              private alertify:AlertifyService) { }

  ngOnInit() {
  }

  loggedin(){
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;

  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login'])
    this.alertify.success("You are logged out")
  }
  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
 
  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

}
