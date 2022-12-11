import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../classes/activity';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private urlPosts="http://localhost:3000/posts";


  constructor(private http:HttpClient) { }

  getPosts():Observable<Activity[]> {
    console.log(this.urlPosts)
    return this.http.get<Activity[]>(this.urlPosts);
  }
  deletePost(id: number):Observable<Activity[]> {
    console.log(this.urlPosts + "/" + id);
    return this.http.delete<Activity[]>(this.urlPosts + "/" + id);
  }
  donePost(activity:Activity):Observable<Activity> {
    console.log(this.urlPosts + "/" + activity.id, activity);
    return this.http.put<Activity>(this.urlPosts + "/" + activity.id, activity);
  }

  // donePost(done:string):Observable<Activity> {
  //   return this.http.put<Activity>(this.urlPosts, Activity)
  // }

  addPost(activity:Activity):Observable<Activity> {
    console.log(this.urlPosts, activity);
    return this.http.post<Activity>(this.urlPosts, activity)
  }

  // saveActivity():Observable<Activity>{
  //   return this.http.post<Activity>(this.urlPosts, Activity);
  // }
}
