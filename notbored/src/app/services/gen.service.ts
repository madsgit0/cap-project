import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../classes/activities';

@Injectable({
  providedIn: 'root'
})
export class GenService {

  peopleApi = '?participants=';

  private urlApi="http://www.boredapi.com/api/activity";

  constructor(private http: HttpClient) { }

  getRandom():Observable<Activity> {
    return this.http.get<Activity>(this.urlApi);
  }

  getByBudgetFree(price:string): Observable<Activity> {
    return this.http.get<Activity>(this.urlApi+'?price=0.0');
  }
  getByBudgetPaid(price:string): Observable<Activity> {
    return this.http.get<Activity>(this.urlApi+'?minprice=0.1&maxprice=1');
  }

  getByPeople(participants:string): Observable<Activity> {
    //console.log(this.urlApi + this.peopleApi + participants);
    return this.http.get<Activity>(this.urlApi + this.peopleApi + participants);
  }

  getByType(type:string): Observable<Activity> {
    //console.log(this.urlApi + this.typeApi + type);
    return this.http.get<Activity>(this.urlApi + type);
  }

  // getPosts():Observable<Activities> {
  //   return this.http.get<Activities>(this.urlPosts);
  // }

  // getActivity():Observable<Activities> {
  //   console.log(this.urlPosts)
  //   return this.http.get<Activities>(this.urlPosts);
  // }

  // saveActivity():Observable<Activities>{
  //   return this.http.post<Activities>(this.urlPosts, Activities);
  // }

  // addActivity(id:number | undefined):Observable<Activities>{
  //   return this.http.get<Activities>(this.urlApi+id);
  //}
  // deleteActivity(id:number | undefined):Observable<Activities>{
  //   return this.http.delete<Activities>(this.urlApi+id);
  // }

}
