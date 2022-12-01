import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/classes/activities';
import { GenService } from 'src/app/services/gen.service';

@Component({
  selector: 'app-gen-random',
  templateUrl: './gen-random.component.html',
  styleUrls: ['./gen-random.component.scss']
})
export class GenRandomComponent implements OnInit {

  activityList: Activities | undefined;

  constructor(private  GenService:GenService) { }

  ngOnInit(): void {
    this.getRandom()
  }

  getRandom(){
    this.GenService.getRandom().subscribe(resp => this.activityList = resp)
  }

}


