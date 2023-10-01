import { Component, Input,Output, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  matchesTab:any=[];
@Input() matchInput:any;
@Output() matchsOutput:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.matchesTab=JSON.parse(localStorage.getItem("matches")|| "[]");
  }
  scoreColor(a:any,b:any){
    if (a>b) {
      return "green";
    } else if (a<b) {
      return "red";
    }else{
      return "blue";
    }
  }
  deleteMatche(id){
   for (let i = 0; i < this.matchesTab.length; i++) {
   if (this.matchesTab[i].id==id) {
    this.matchesTab.splice(i,1);
    this.matchsOutput.emit(this.matchesTab);
    break;
   }
    
   }
   localStorage.setItem("matches",JSON.stringify(this.matchesTab)); 
  }
}
