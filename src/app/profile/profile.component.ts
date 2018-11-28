import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../servers/regservice.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    userDetails;
    userId='';
    constructor(private service: RegserviceService, private router: Router,private location :Location) { }
  
    ngOnInit() { 
      if(!this.service.isLoggedIn())
      this.router.navigate(['/login']);

      this.service.getUserProfile().subscribe(
        res => {
          this.userDetails = res['user'];
          this.userId=this.userDetails._id;
          this.service.setid(this.userDetails._id);
          // console.log(this.userId);
          // console.log(this.userDetails)
        },
        err => { 
          console.log(err);
          
        });
    }
    onLogout(){
      this.service.deleteToken();
      this.router.navigate(['/login']);
    }
    navigate(){console.log('navigate')
      this.router.navigate(['/userprofile/myparks']);
    }
ishome(){
  var titlee = this.location.prepareExternalUrl(this.location.path());

  if( titlee === '/user-profile' ) {
      return true;
  }
  else {
      return false;
  }
}
}
