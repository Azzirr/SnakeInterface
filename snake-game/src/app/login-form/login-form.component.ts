import { Component, OnInit, ViewChild, Input, ElementRef, Output, EventEmitter, Injectable } from '@angular/core';
import { DataService } from '../Services/data.service';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  constructor(private data: DataService){

  }
  updateName(name: string){
    this.data.updateData(name);
  }
  tokenType: string = 'password';
  tokenShown: boolean = false;
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

  getName(value: string){
    this.displayValue = value;
  }

  getToken(value: string){
    this.token = value;
  }
  ngOnInit(): void {
  }

}
