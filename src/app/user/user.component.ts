import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from 'src/app/user';
import {UserService} from '../user.service';
import {Observable, Subscription} from 'rxjs';
import {CookieService} from "ngx-cookie-service";
import {AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  cookie: String;
  user: User;
  returnUser:User;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router,private cookieService:CookieService) {
    this.user = new User();
    
  }

  ngOnInit() {
    

    
  }

  login(): void {
    
  }

  onSubmit() {
    this.userService.verifyUser(this.user).subscribe(data => {
      this.returnUser = data;
      console.log(this.returnUser);
      if(this.returnUser!==null){
        console.log(this.returnUser.id);
        this.cookieService.set("name", String(this.returnUser.id));
      } else {
        this.cookieService.set("name", "false");
        alert("Invalid user and/or password");
        this.router.navigate(['user']);
      }
    });
    console.log(this.returnUser);
  }

  verify() {
    window.location.pathname=("/");
  }
}