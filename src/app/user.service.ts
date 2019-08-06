import { Injectable } from '@angular/core';
import {User} from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {NgModel} from "@angular/forms";
import {retry, catchError} from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user:User;
returnUser:User;
  private userUrl: string;
  private verifyUrl: string;
  public currentUser: string;

  constructor(private http: HttpClient) {
    this.userUrl = environment.apiUrl + 'users/add';
    this.verifyUrl = environment.apiUrl + 'users/verify';
    this.currentUser = ' ';
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }

  public verifyUser(user: User) {
   return this.http.post<User>(this.verifyUrl,user);
    
  }
}

