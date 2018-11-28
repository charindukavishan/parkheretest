import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../servers/regservice.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import decode from 'jwt-decode';
import { NgForm } from "@angular/forms";




@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    constructor(private service:RegserviceService,private router:Router,private state:AppComponent) { }

    model ={
      email :'',
      password:''
    };
    isAdmin:boolean;
    roll='';
    serverErrorMessages: string;
    ngOnInit() {
      if(this.service.isLoggedIn())
      this.router.navigateByUrl('/admin');
      this.isAdmin=false;
    }
   
    
      onSubmit(form : NgForm){
        this.service.login(form.value).subscribe(
          res => {
            this.service.setToken(res['token']);
            const token =this.service.getToken();
            const tokenPayload = decode(token);
            console.log(tokenPayload.role);
        //   if(tokenPayload.role == "admin"){
        //    this.router.navigateByUrl('/user-profile');
        //     // this.state.state=true;
        // }
        //     else{
              this.router.navigateByUrl('/user-profile');
            // //   this.state.state=true;
            // }
          },
          err => {console.log(err)
            this.serverErrorMessages = err.error.message;
          }
        );
      }
  
}
