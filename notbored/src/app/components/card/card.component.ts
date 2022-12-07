import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/classes/activities';
import { GenService } from 'src/app/services/gen.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  atype: string = '';
  user: string = '';

  activityList: Activities | undefined;

  constructor(private  GenService:GenService) { }

  ngOnInit(): void {
    //this.getRandom()
    // this.getByPeople()

  }

  getRandom(){
    this.GenService.getRandom().subscribe(resp => this.activityList = resp)
  }
  getByBudgetFree(price:string){
    this.GenService.getByBudgetFree(price).subscribe(resp => this.activityList = resp)
  }
  getByBudgetPaid(price:string){
    this.GenService.getByBudgetPaid(price).subscribe(resp => this.activityList = resp)
  }
  getByPeople(participants:any){
    this.GenService.getByPeople(participants).subscribe(resp => this.activityList = resp)
  }
  getByType(type: string){
    this.GenService.getByType(type).subscribe(resp => this.activityList = resp)
  }

  saveActivity(){
    this.GenService.saveActivity().subscribe(resp => this.activityList = resp)
  }

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



