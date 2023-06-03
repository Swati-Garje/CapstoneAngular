import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router:Router){}

  loginUser=true;
  logoutUser=false;
  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if(user=='login'){
      this.loginUser=false;
      this.logoutUser=true;
    }
    }

    logOut(){
      this.router.navigate(["/main/home"]);
      localStorage.setItem('user', '');
      this.loginUser=true;
      this.logoutUser=false;
    }
}
