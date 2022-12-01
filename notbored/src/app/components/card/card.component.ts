import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/classes/activities';
import { GenService } from 'src/app/services/gen.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  activityList: Activities[] = [];

  constructor(private  GenService:GenService) { }

  // ngOnInit(): void {
  //   this.GenService.getRandom().subscribe(resp => console.log(resp))
  // }



ngOnInit(): void {
  this.GenService.getRandom().subscribe(resp => this.activityList = resp)
}
}
