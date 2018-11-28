import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import decode from 'jwt-decode';
@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.scss']
})
export class ProfileeditComponent implements OnInit {

  constructor(public service:RegserviceService) { }
  userDetails;
  userId='';
  name="charindu"
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
issuccess:boolean=false
  message="Success";
  ngOnInit() {

    this.service.getUserProfile().subscribe(
      res => { 
        this.userDetails = res['user'];
        this.userId=this.userDetails._id;
        this.service.setid(this.userDetails._id);
        console.log(this.name)
        // console.log(this.userId);
        // console.log(this.userDetails)
        this.reg.firstName=this.userDetails.firstName;
        this.reg.lastName=this.userDetails.lastName;
        this.reg.address=this.userDetails.address;
        this.reg.city=this.userDetails.city;
        this.reg.country=this.userDetails.country
      },
      err => { 
        console.log(err);
        
      });
  }

  edit(){
    const token =this.service.getToken();
    const tokenPayload = decode(token);

    this.service.edit(this.reg,tokenPayload._id).subscribe(
      res=>{
        this.issuccess=true;
        this.message="Success"
      },
      err=>{

      }
    )
  }
  public closeAlert() {
    this.issuccess=true;
  }

}
