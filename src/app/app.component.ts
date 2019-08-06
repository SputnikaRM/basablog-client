import { Component,OnInit, Input} from '@angular/core';
import { User } from 'src/app/user';
import {CookieService} from "ngx-cookie-service";
import { BlogService } from './blog.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  loginstatus = false;
  title = 'ZipShare';
  
  blogService : BlogService;
  constructor( private cookservice: CookieService ) { }
  ngOnInit(){

  }
  userstatuschange(): boolean{
    if(!this.cookservice.check("name")){return false}
    if(this.cookservice.get("name")==="true"){
      this.loginstatus=true;
    } 
  }
  
  logout(): void {
    this.cookservice.set("name", "false");
  }

  getLoggedInStatus(): boolean {
    if (!this.cookservice.check("name")) return false;
    if (this.cookservice.get("name")==="true") this.loginstatus=true;
    if (this.cookservice.get("name")==="false") this.loginstatus=false;
    return this.loginstatus;
  }

  goHome() : void {
    window.location.pathname="/";
  }
}
