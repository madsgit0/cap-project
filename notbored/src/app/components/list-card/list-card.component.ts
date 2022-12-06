import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/classes/activities';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  posts = [{
    activity: "learn to greet someone in a new language",
    type: "Education",
    participants: 1,
    price: 0.1,
    done: ""
  },{
    activity: "play a game of monopoly",
    type: "Education",
    participants: 1,
    price: 0.1,
    done: ""
  },{
    activity: "write a short story",
    type: "Education",
    participants: 1,
    price: 0.1,
    done: "done"
  },{
    activity: "memorize the fifty states and their capitals",
    type: "Education",
    participants: 1,
    price: 0.1,
    done: ""
  }]

  activityList: Activities | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  donePost(i: number){
    this.posts[i].done = this.posts[i].done === "done" ? "" : "done" ;
  }

  deletePost(i: number){
    this.posts.splice(i,1);
  }
}
