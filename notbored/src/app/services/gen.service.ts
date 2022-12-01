import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activities } from '../classes/activities';

@Injectable({
  providedIn: 'root'
})
export class GenService {

  private urlApi="http://www.boredapi.com/api/activity";
  // private urlApi="https://jsonplaceholder.typicode.com/users/";

  constructor(private http: HttpClient) { }

  getRandom():Observable<Activities> {
    return this.http.get<Activities>(this.urlApi);
  }

  getByType(type:string): Observable<Activities> {
    return this.http.get<Activities>(this.urlApi+"?type=recreational");
  }

  getByPeople(participants:number): Observable<Activities> {
    return this.http.get<Activities>(this.urlApi+'?participants=1');
  }

  getByBudget(price:number): Observable<Activities> {
    return this.http.get<Activities>(this.urlApi+price);
  }

  saveActivity(activity:Activities):Observable<Activities>{
    return this.http.post<Activities>(this.urlApi, activity);
  }

  addActivity(id:number | undefined):Observable<Activities>{
    return this.http.get<Activities>(this.urlApi+id);
  }
  // deleteActivity(id:number | undefined):Observable<Activities>{
  //   return this.http.delete<Activities>(this.urlApi+id);
  // }

}
