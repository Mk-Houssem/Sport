import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
tab : any = [
  {p:"1", team:"FCB", w:"12", d:"5", l:"3", pts:"25"},
  {p:"2", team:"RMD", w:"10", d:"5", l:"4", pts:"30"},
  {p:"3", team:"ATM", w:"10", d:"5", l:"4", pts:"32"},
  {p:"4", team:"SEV", w:"8", d:"5", l:"5", pts:"35"},
];


  constructor() { }

  ngOnInit() {
  }

}
