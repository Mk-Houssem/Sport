import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  matchesTab: any = [];
  constructor(private router: Router,private matcheService : MatchService) { }

  ngOnInit() {
    // this.matchesTable=JSON.parse(localStorage.getItem("matches" )|| "[]");
    this.matcheService.displayAllMatches().subscribe(
      (response)=>{
        console.log("here response from BE", response);
        this.matchesTab=response.matches;
      }
    )
  }
  goToDisplat(id: Number) {
    // alert("clicked" + id);
    // location.replace("....");
    // this.router.navigate(["matchInfo/"+id]);
    this.router.navigate([`matchInfo/${id}`]);
  }
  edit(id: Number){
    this.router.navigate([`editMatch/${id}`]);
  }
  deleteMatch(x){
    for (let i = 0; i < this.matchesTab.length; i++) {
      if (this.matchesTab[i].id==x) {
        this.matchesTab.splice(i,1);
        break;        
      }
    }
    localStorage.setItem("matches", JSON.stringify(this.matchesTab));
  }

}
