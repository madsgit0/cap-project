import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RegisterAuth } from './register-auth';
import { Router } from '@angular/router';

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

  private isLogin: AuthData | null = null;
  helper = new JwtHelperService();


  constructor(private http:HttpClient,  private router: Router) {
    this.restore();
  }

  restore() {
    const userLogin = localStorage.getItem('userLogin');
    if(userLogin){
      let userLoggedIn: AuthData = JSON.parse(userLogin);
      if(! this.helper.isTokenExpired(userLoggedIn.accessToken)){
        this.isLogin = userLoggedIn;
      }
    } else {
      this.isLogin = null;
    }
  }

  logout(){
    this.isLogin = null;
    this.router.navigate(['/login'])
    localStorage.clear()
    //localStorage.removeItem('userlogin')
    console.log(this.isLogin)
  }

  signup(obj: RegisterAuth){
    return this.http.post(environment.urlAPI + 'register', obj)
  }

  signin(obj: RegisterAuth){
    return this.http.post<AuthData>(environment.urlAPI + 'login', obj).pipe(
      tap((data) => {
        console.log(data)
        this.isLogin = data;
        console.log(this.isLogin)
      })
    )
  }

  getIsLogin(){
    return this.isLogin
  }

}
