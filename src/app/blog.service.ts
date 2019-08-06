import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from 'src/app/post';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogposturl = environment.apiUrl + "blogPost/add";
  private bloggeturl =  environment.apiUrl + "blogPost/all";
  private postgeturl = environment.apiUrl + "blogPost/";
  private postdeleteurl = environment.apiUrl + "blogPost/";

  
  constructor(private http:HttpClient) {}

  public findAllBlogPost(): Observable<Post[]>{
    return this.http.get<Post[]>(this.bloggeturl);
  }

  public getBlogPost(id : number): Observable<Post> {
    return this.http.get<Post>(this.postgeturl + id);
  }
  
  public save(post: Post){
    return this.http.post<Post>(this.blogposturl,post);
  }

  public findAllBlogPostByTag1(tag1: string): Observable<Post[]>{
    return this.http.get<Post[]>(this.postgeturl + "all/" + tag1);
  }

  public findAllBlogPostsDesc(): Observable<Post[]> {
    return this.http.get<Post[]>(this.bloggeturl + "/reverse");
  }

  public deleteBlogPost(id : number): Observable<string> {
    return this.http.delete<string>(this.postdeleteurl + id);
  }
}
