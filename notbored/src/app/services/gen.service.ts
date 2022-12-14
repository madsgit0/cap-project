import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../classes/activity';

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
}
