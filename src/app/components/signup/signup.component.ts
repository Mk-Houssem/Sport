import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //Form ID
  signupForm: FormGroup;
  title: string;
  path: string;
  imagePreview:any;
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private userService:UserService) { }

  ngOnInit() {
    this.path = this.router.url;
    this.title = this.path == "/signupUser" ? "User" : "Admin";
    
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      img:[""],
    })
  }
  signup() {
    this.signupForm.value.role = this.path == "/signupUser" ? "User" : "Admin";
    console.log("here user", this.signupForm.value);
    this.userService.signup(this.signupForm.value,this.signupForm.value.img).subscribe((response)=>{
      console.log("Here response from BE", response);
    })
  }

  onImageSelected(event:Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
}