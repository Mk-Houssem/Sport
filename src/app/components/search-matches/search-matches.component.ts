import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-matches',
  templateUrl: './search-matches.component.html',
  styleUrls: ['./search-matches.component.css']
})
export class SearchMatchesComponent implements OnInit {
  
 
  searchMatchesTab: any = [];
  matchesTab: any =[];
  searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      scoreOne: ["", [Validators.required]],
      scoreTwo: ["", [Validators.required]],
    })
    
  }
  searchMatches() {
    this.searchMatchesTab = [];
    this. matchesTab = JSON.parse(localStorage.getItem("matches") || "[]");
    let obj = this.searchForm.value;

    // for (let i = 0; i < matchesTab.length; i++) {
      
      // if (matchesTab[i].scoreOne == obj.scoreOne && matchesTab[i].scoreTwo == obj.scoreTwo) {
      //   this.searchMatchesTab.push(matchesTab[i]);
    //   }
    // }

    this.searchMatchesTab=this.matchesTab.filter((elt)=>{
      return (
        (elt.scoreOne == obj.scoreOne && elt.scoreTwo == obj.scoreTwo) 
      )
    })
  }
}


