import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/classes/activities';
import { GenService } from 'src/app/services/gen.service';
import { PostsService } from 'src/app/services/posts.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  atype: string = '';
  user: string = '';
  posts:Activity[] = []
  activityList!: Activity ;

  constructor(private  genService:GenService, private postsService:PostsService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getRandom()
  }

  getRandom(){
    this.genService.getRandom().subscribe(resp => this.activityList = resp)
  }
  getByBudgetFree(price:string){
    this.genService.getByBudgetFree(price).subscribe(resp => this.activityList = resp)
  }
  getByBudgetPaid(price:string){
    this.genService.getByBudgetPaid(price).subscribe(resp => this.activityList = resp)
  }
  getByPeople(participants:any){
    this.genService.getByPeople(participants).subscribe(resp => this.activityList = resp)
  }
  getByType(type: string){
    this.genService.getByType(type).subscribe(resp => this.activityList = resp)
  }

  addPost(activity:Activity){
    this.sharedService.sendClickEvent(activity)
  }

  // saveActivity(){
  //   this.sharedService.saveActivity().subscribe(resp => this.activityList = resp)
  // }

}



