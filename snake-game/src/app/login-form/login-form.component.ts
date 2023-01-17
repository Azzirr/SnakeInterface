import { Component, OnInit, ViewChild, Input, ElementRef, Output, EventEmitter } from '@angular/core';

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
  @Output() startEvent = new EventEmitter<boolean>();
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
  startGame(){
    if(this.token === 'pass123word' && this.displayValue !== '' && this.displayValue.length >= 3){
      this.startSnake = true
    }
    
    if(this.name === 'Username' || this.name === undefined || this.name === null){
      this.whenEmpty.nativeElement.innerHTML = "User name can't be empty";
    }
  }

  send(){
    this.startEvent.emit(this.startSnake)
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
