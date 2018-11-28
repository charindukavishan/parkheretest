import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../servers/regservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public service:RegserviceService,public router:Router) { }
  reg={
    firstName:'',
    lastName : '',
    email:'',
    address:'',
    city:'',
    country:'',
    zip: '',
    nic:'',
    password:'',
    confirmPassword:''

  }
iserror:boolean=false;
  res='';
  serverErrorMessages='';
  ngOnInit() {
  }
register(){
  this.service.storedetails(this.reg)
            .subscribe(
                (response)=>{if(response){
                 this.res=response['status'];
                 console.log(response)
                  if(!this.res){
                    this.serverErrorMessages='Your email is already exists'
                  }else{console.log(response)
                    this.serverErrorMessages="Registration Succsesfull";
                    this.router.navigateByUrl('/signup');
                  }
                }
                
                }
                ,
                (error)=>{console.log(error);this.iserror=true;
                {if(error) this.serverErrorMessages='Your email is already exists';}}
              );
}


public closeAlert() {
  this.iserror=false;
}
}
