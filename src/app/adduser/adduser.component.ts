import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.save(this.user).subscribe();
    window.location.pathname='/user';
  }
}

