import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Activity } from '../classes/activities';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject = new Subject<Activity>();

  sendClickEvent(activity:Activity) {
    this.subject.next(activity);
  }
  getClickEvent(): Observable<Activity>{
    return this.subject.asObservable();
  }

}
