import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/observable';
import {User} from '../Model/User';
import {Apiresponse} from '../Model/apiresponse';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl="http://localhost:3000/employee";
  
  

  constructor(private http:HttpClient) { }
  CreateUser(user:User):Observable<Apiresponse>{
   // console.log(user);
    return this.http.post<Apiresponse>(this.baseUrl, {user});
  }
}

