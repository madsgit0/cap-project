import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/classes/activity';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  posts:Activity[] = []


  constructor(private  postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts()
  }



  getPosts(){
    this.postsService.getPosts().subscribe(resp => this.posts = resp)
    }

  // donePost(done:string){
  //   this.postsService.donePost(done).subscribe(resp => this.posts)
  //   //this.posts[i].done = this.posts[i].done === "done" ? "" : "done" ;
  // }
  donePost(i: number){
    this.posts[i].done = this.posts[i].done === "done" ? "" : "done" ;
  }


  deletePost(i: number){
    this.postsService.deletePost(this.posts[i].id).subscribe()
    this.posts.splice(i,1);

  }
  }



