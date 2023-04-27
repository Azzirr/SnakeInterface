import { Component, OnInit, ViewChild, Input, ElementRef, Output, EventEmitter, Injectable } from '@angular/core';
import { DataService } from '../Services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  constructor(
    private data: DataService,
    private formBuilder: FormBuilder
    ){

  }
  updateName(name: string){
    this.data.updateData(name);
  }
  loginForm!:FormGroup
  tokenType: string = 'password';
  tokenShown: boolean = false;
  name: string = '';
  displayValue: string = '';
  token: string = '';
  submitted: boolean = false;
  // @Output() eventTask = new EventEmitter<string>();
  // insertName(task: string){
  //   this.eventTask.emit(task)
  // }
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

  getName(value: string){
    this.displayValue = value;
  }

  getToken(value: string){
    this.token = value;
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    } else{
      alert('Success!');
    }
  }

  ngOnInit(): void {
    //validations
    this.loginForm = this.formBuilder.group({
      userName:['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      password:['', [Validators.required, Validators.minLength(4)]]
    })
  }

}
