import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { generateId } from 'src/app/data/generateFunctions';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  //object
  match: any = {};
  // Form ID
  matchForm: FormGroup;

  constructor() { }

  ngOnInit() { }
  //Method
  addMatch() {
    console.log("here match object", this.match);
    let matchesTab = JSON.parse(localStorage.getItem("matches") || "[]");
    this.match.id = generateId(matchesTab);
    matchesTab.push(this.match);
    localStorage.setItem("matches", JSON.stringify(matchesTab));
  }
}
