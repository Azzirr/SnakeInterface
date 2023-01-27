import { Component, OnInit, ViewChild, Input, ElementRef, Output, EventEmitter, Injectable } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  tokenType: string = 'password';
  tokenShown: boolean = false;
  startSnake: boolean = false;
  name: string = '';
  displayValue: string = '';
  token: string = '';
  @Output() eventTask = new EventEmitter<string>();
  insertName(task: string){
    this.eventTask.emit(task)
  }
  hidePassword(){
    if(this.tokenShown){
      this.tokenShown = false;
      this.tokenType = 'password'
    } else {
      this.tokenShown = true;
      this.tokenType = 'text'
    }
    console.log(this.name)
  }
  @ViewChild('whenEmpty')
  whenEmpty!: ElementRef;
  startGame(){
    if(this.token === 'pass123word' && this.displayValue !== '' && this.displayValue.length >= 3){
      this.startSnake = true
    }
    if(this.name === 'Username' || this.name === undefined || this.name === null){
      this.whenEmpty.nativeElement.innerHTML = "User name can't be empty";
    }
    return this.name;
  }
  getName(value: string){
    this.displayValue = value;
  }

  getToken(value: string){
    this.token = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
