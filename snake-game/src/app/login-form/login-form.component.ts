import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  @Input()
  message = 'Hello from the other side'
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
  @ViewChild('whenEmpty')
  whenEmpty!: ElementRef;
  startGame(){
    if(this.token === 'pass123word' && this.displayValue !== '' && this.displayValue.length >= 3){
      this.startSnake = true;
    }
    
    if(this.name === 'Username' || this.name === undefined || this.name === null){
      this.whenEmpty.nativeElement.innerHTML = "I am changed by ElementRef & ViewChild";
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
