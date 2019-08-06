import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Comment } from '../comment';
import { Post } from '../post';


@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {
  @Input() post : Post;

  comment : Comment;

   constructor(private route: ActivatedRoute, private commentService : CommentService ,private router: Router) {
      this.comment = new Comment();
   }

  ngOnInit() {
  }

  onSubmit(){
    this.comment.postid = +this.route.snapshot.paramMap.get('id');
    this.commentService.save(this.comment).subscribe();
    window.location.pathname=`/post/${this.comment.postid}`;
  }



}
