
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { loginuser } from './app.model';

@Injectable({providedIn: 'root'})
export class loginservice {
    constructor() { }
    
    private http=inject(HttpClient)
    login(form:loginuser){
        return this.http.post('https://dummyjson.com/user/login',form)
    }
}