import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RegisterAuth } from './register-auth';

export interface AuthData {
  accessToken: string;
  user: {
    firstname: string;
    lastname: string;
    email: string;
    id: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogin = true;

  constructor(private http:HttpClient) {
    this.restore();
  }

  restore() {
    const userLogin = localStorage.getItem('userLogin');
    if(userLogin){
      this.isLogin = true;
    }else{
      this.isLogin = false;
    }
  }

  signup(obj: RegisterAuth){
    return this.http.post(environment.urlAPI + 'register', obj)
  }

  signin(obj: RegisterAuth){
    return this.http.post<AuthData>(environment.urlAPI + 'login', obj).pipe(
      tap((data) => {
        console.log(data)
        this.isLogin = true;
        console.log(this.isLogin)
      })
    )
  }

  getIsLogin(){
    return this.isLogin
  }

}
