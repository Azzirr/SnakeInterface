import { Component, OnInit, ViewChild, Input, ElementRef, Output, EventEmitter, Injectable } from '@angular/core';
import { DataService } from '../Services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ScoreService } from '../Services/score.service';
import { Router } from '@angular/router';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  constructor(
    private data: DataService,
    private score: ScoreService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ){
  
  }
  loginForm!:FormGroup
  tokenType: string = 'password';
  tokenShown: boolean = false;
  name: string = '';
  token: string = '';
  submitted: boolean = false;
  accessGranted: boolean = false;
  authComplete: any = {
    success: false
  };
  selectedColor: string = 'normal';

  onColorSelect(event: any){
    this.selectedColor = event.target.value;
  }
  hidePassword(){
    if(this.tokenShown){
      this.tokenShown = false;
      this.tokenType = 'password'
    } else {
      this.tokenShown = true;
      this.tokenType = 'text'
    }
  }
  
  @ViewChild('whenEmpty')
  whenEmpty!: ElementRef;

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    } else{
      this.data.name = this.name;
      if(this.authComplete['success'] === true){
        this.score.getAuth(this.token);
        this.accessGranted = true;
        if(this.accessGranted === true){
          if(this.selectedColor === 'normal'){
            this.router.navigate(['/game'])
          } else if(this.selectedColor === 'black-and-white'){
            this.router.navigate(['/game/black-and-white'])
          }
        } 
      }
    }
  }
  onAuthClient(){
    let data = {
      "auth-token": this.token
    }
    this.http.post('http://scores.chrum.it/check-token', data)
    .subscribe((response) => {
      console.log(response)
      this.authComplete = response;
    });
  }
  ngOnInit(): void {
    //validations
    this.loginForm = this.formBuilder.group({
      userName:['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      password:['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    })
  }

}
