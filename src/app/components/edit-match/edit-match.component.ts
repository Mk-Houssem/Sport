import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  matchForm: FormGroup;

  findedMatch: any = {};
  updateMatch: any = {};
  id: any;
  constructor(private activateRoute: ActivatedRoute,
    private router: Router,
    private matcheServise: MatchService) { }

  ngOnInit() {
    // this.matchesTab=JSON.parse(localStorage.getItem("matches")||"[]");
    this.id = this.activateRoute.snapshot.paramMap.get("id");
    // for (let i = 0; i < this.matchesTab.length; i++) {
    //   if (this.matchesTab[i].id == this.id) {
    //     this.findedMatch = this.matchesTab[i];
    //     break;
    //   }
    // }

    this.matcheServise.displayMatchById(this.id).subscribe((response) => {
      console.log("Here is response from BE", response);
      this.findedMatch = response.matche;

    })
  }
  editMatch() {
    // for (let i = 0; i < this.matchesTab.length; i++) {

    //   if (this.matchesTab[i].id == this.id) {
    //     this.matchesTab[i] = this.findedMatch;
    //     break;
    //   }
    // }
    // localStorage.setItem("matches", JSON.stringify(this.matchesTab));
    this.updateMatch = this.findedMatch;
    this.updateMatch._id = this.id;
    console.log(this.updateMatch);
    
    this.matcheServise.editMatch(this.updateMatch).subscribe((response) => {
      console.log("Here response From BE ", response);
      this.router.navigate([`admin`]);
    });

  }
}
