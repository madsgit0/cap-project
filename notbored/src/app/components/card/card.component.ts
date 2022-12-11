import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/classes/activity';
import { GenService } from 'src/app/services/gen.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  atype: string = '';
  user: string = '';
  posts:Activity[] = []
  activityList: Activity | undefined;

  constructor(private  genService:GenService, private postsService:PostsService) { }

  ngOnInit(): void {
    this.getRandom()
    // this.getByPeople()

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
    this.postsService.addPost(activity).subscribe(resp => this.posts.push(resp))
  }

  saveActivity(){
    this.postsService.saveActivity().subscribe(resp => this.activityList = resp)
  }

  // getActivity(){
  //   this.GenService.getActivity().subscribe(resp => this.activityList = resp)
  // }

  // getByPeople(){
  //   this.GenService.getByPeople().subscribe(resp => this.activityList = resp)
  // }




  // ngOnInit(): void {
  //   this.GenService.getRandom().subscribe(resp => console.log(resp))
  // }



// addActivity(activity:Activities){
//   this.GenService.addActivity(Activities.key).subscribe(resp => console.log(resp));
// }
// deleteActivity(activity:Activities){
//   this.GenService.deleteActivity(Activities.id).subscribe(resp => console.log(resp));
// }
// deleteActivity(activity:Activities){
//   this.GenService.deleteActivity(Activities.id).subscribe(resp =>{
//     this.activityList = this.activityList.filter(ele => ele.id != Activities.id)
//   });
// }

}



