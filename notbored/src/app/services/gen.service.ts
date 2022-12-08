import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activities } from '../classes/activities';

@Injectable({
  providedIn: 'root'
})
export class GenService {

  peopleApi = '?participants=';
  //typeApi = '?type=';
  // nPeople = '';
  // people = this.peopleApi+this.nPeople;



  private urlApi="http://www.boredapi.com/api/activity";
  private urlPosts="http://localhost:3000/posts";

  constructor(private http: HttpClient) { }

  // getNumPeople()

  getRandom():Observable<Activities> {
    return this.http.get<Activities>(this.urlApi);
  }

  getByBudgetFree(price:string): Observable<Activities> {
    return this.http.get<Activities>(this.urlApi+'?price=0.0');
  }
  getByBudgetPaid(price:string): Observable<Activities> {
    return this.http.get<Activities>(this.urlApi+'?minprice=0.1&maxprice=1');
  }

  getByPeople(participants:string): Observable<Activities> {
    //console.log(this.urlApi + this.peopleApi + participants);
    return this.http.get<Activities>(this.urlApi + this.peopleApi + participants);
  }

  getByType(type:string): Observable<Activities> {
    //console.log(this.urlApi + this.typeApi + type);
    return this.http.get<Activities>(this.urlApi + type);
  }


  // getPosts():Observable<Activities> {
  //   return this.http.get<Activities>(this.urlPosts);
  // }

  saveActivity():Observable<Activities>{
    return this.http.post<Activities>(this.urlPosts, Activities);
  }

  addActivity(id:number | undefined):Observable<Activities>{
    return this.http.get<Activities>(this.urlApi+id);
  }
  // deleteActivity(id:number | undefined):Observable<Activities>{
  //   return this.http.delete<Activities>(this.urlApi+id);
  // }

}
