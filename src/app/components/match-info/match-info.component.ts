import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {

  findedMatch:any;
  constructor(private activateRoute:ActivatedRoute,
    private matcheService : MatchService) { }

  ngOnInit() {
    let id=this.activateRoute.snapshot.paramMap.get("id");
    this.matcheService.displayMatchById(id).subscribe(
      (response)=>{
        console.log("here response from BE", response);
        this.findedMatch=response.matche;
      }
    )
  }

}




  //   for (let i = 0; i < this.matchesTab.length; i++) {
  //    if (this.matchesTab[i].id==id) {
  //     this.findedMatch=this.matchesTab[i];
  //     break;
  //    }
     
  //   }
  //   console.log(this.findedMatch);
 
