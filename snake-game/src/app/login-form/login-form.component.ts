import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  tokenType: string = 'password';
  tokenShown: boolean = false;
  startSnake: boolean = false;
  name: string = 'Username'
  displayValue: string = '';
  token: string = '';

  hidePassword(){
    if(this.tokenShown){
      this.tokenShown = false;
      this.tokenType = 'password'
    } else {
      this.tokenShown = true;
      this.tokenType = 'text'
    }
  }

  startGame(){
    if(this.token === 'pass123word' && this.displayValue !== '' && this.displayValue.length >= 3){
      this.startSnake = true;
    }
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
