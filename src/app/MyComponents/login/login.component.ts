import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NgForm } from "@angular/forms";
import { Admin } from 'src/app/models/Admin';
import { LoginService } from 'src/app/MyServices/login.service';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin = new Admin();
  loginservice : LoginService;
  temp;
  msg : string = null;
  
  
  constructor(private loginService : LoginService , private router : Router) { }

  ngOnInit(): void {
  }

  public onClick(){
 

   this.loginService.validateAdmin(this.admin).subscribe(

    (data) => {
      if(data === 1){
          this.router.navigate(['/home']);
      }
      if(data === 0 || data === null){
          this.msg = "Invalid username or password!";

          alert(this.msg);
          
      }
    },
    (error) =>{

      this.msg = "Invalid username or password!"
              alert(this.msg);
              console.log("error encountered!");
    }
  );
  }

  public adminLogin(){
    this.loginService.validateAdmin(this.admin).subscribe(

      (data) => {
        if(data === 1){
            this.router.navigate(['/home']);
        }
        if(data === 0){
            this.msg = "Invalid username or password!";
        }
      },
      (error) =>{
                console.log("error encountered!");
      }
    );
  }

}
