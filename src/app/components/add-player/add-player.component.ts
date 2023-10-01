import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  //object
  player: any = {};
  teams: any = [];
  teamId:any;
  // Form ID
  playerForm: FormGroup;
  imagePreview: any;


  constructor(private playerService: PlayerService, private router: Router, private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeam().subscribe((response) => {
      this.teams = response.teams;
      this.teamId=this.teams[0]._id;
    })
  }
  //Method
  addPlayer() {
    this.player.tId=this.teamId;
    console.log("here player object", this.player);
    this.playerService.addPlayer(this.player, this.player.img).subscribe((response) => {
      console.log("Here response from BE : ", response);
      this.router.navigate([``]);
    });
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.player.img = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
  selectTeam(event){
    console.log("Here team :",event.target.value);
    this.teamId=event.target.value;
  }

}
