import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StadiumService } from 'src/app/services/stadium.service';

import { TeamService } from 'src/app/services/team.service';



@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  stadium: any = {};
  
  // Form ID
  stadiumForm: FormGroup;
  imagePreview: any;
  constructor(private stadiumService: StadiumService) { }

  ngOnInit() {
   
  }
  //Method
  addStadium() {

    console.log("here stadium object", this.stadium);
    this.stadiumService.addStadium(this.stadium, this.stadium.img).subscribe((response) => {
      console.log("Here response from BE : ", response);
     
    });
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.stadium.img = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }



}
