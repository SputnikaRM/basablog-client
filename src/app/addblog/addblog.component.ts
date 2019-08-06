import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import {Post} from 'src/app/post';
import { ActivatedRoute, Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  post: Post;
  // http: HttpClient;

  constructor(private route:ActivatedRoute, private blogService: BlogService,private router: Router) {
      this.post = new Post();
   }

  ngOnInit() {
  }

  onSubmit(){
    this.blogService.save(this.post).subscribe();
    window.location.pathname="/";
  }

  // gotoUserList(){
  //   this.router.navigate(['blogPost/add'])
  // }

}
