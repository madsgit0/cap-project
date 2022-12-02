import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activities } from '../classes/activities';

@Injectable({
  providedIn: 'root'
})
export class GenService {

  peopleApi = '?participants=';
  nPeople = '';
  people = this.peopleApi+this.nPeople;



  private urlApi="http://www.boredapi.com/api/activity";
  // private urlApi="https://jsonplaceholder.typicode.com/users/";

  constructor(private http: HttpClient) { }

  // getNumPeople()

  getRandom():Observable<Activities> {
    return this.http.get<Activities>(this.urlApi);
  }

  getByType(type:string): Observable<Activities> {
    return this.http.get<Activities>(this.urlApi+"?type=recreational");
  }

  getByPeople(participants:string): Observable<Activities> {
    //return this.http.get<Activities>(this.urlApi);
     return this.http.get<Activities>(this.urlApi + this.people);
  }

  getByBudgetFree(price:string): Observable<Activities> {
    return this.http.get<Activities>(this.urlApi+'?price=0.0');
  }
  getByBudgetPaid(price:string): Observable<Activities> {
    return this.http.get<Activities>(this.urlApi+'?minprice=0.1&maxprice=1');
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
