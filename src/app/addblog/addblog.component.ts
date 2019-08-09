import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import {Post} from 'src/app/post';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  post: Post;

  constructor(
    private blogService: BlogService,
    private cookieService: CookieService) {
      this.post = new Post();
   }

  ngOnInit() {
  }

  onSubmit(){
    if (this.cookieService.get("name")==="false") {
      alert("You must log in to post blogs!");
      return window.location.pathname="/user";
    }
    this.post.userId = Number(this.cookieService.get("name"));
    console.log(this.post.userId);
    this.blogService.save(this.post).subscribe();
    window.location.pathname="/";
  }

}
