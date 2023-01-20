import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  timer: number = 0;
  playing: boolean = true;
  gameStatus: string = 'Ready to go';
  gameHistory: Array<string> = [];
  points: number = 0;
  sort: Array<any> = [{description: 'From earliest to latest'}, {description: 'From latest to earliest'}];
  defaultSortValue: string = 'From earliest to latest'; //used for sort table


  public gameStatusStart(){
    this.gameStatus = 'Game is running'
    this.gameHistory.push(`Second ${this.timer}: ` + this.gameStatus)
  }
  public gameStatusEnd(){
    this.gameStatus = 'Game over'
    this.gameHistory.push(`Second ${this.timer}: ` + this.gameStatus)
  }
  public gameStatusReset(){
    this.gameStatus = 'Ready to go'
    this.gameHistory.push(`Second ${this.timer}: ` + 'Game restarted and ready to go')
  }
  public gameStatusPaused(){
    this.gameStatus = 'Game is paused'
    this.gameHistory.push(`Second ${this.timer}: ` + this.gameStatus)
    console.log(this.gameHistory)
  }
  public exitButton(){
    this.playing = false;
  }
  public sortTable(value: any){
    this.startSort(value);
  }
  public startSort(value: any){
      this.gameHistory.reverse();
  }


  @Input() name: string = '';
  constructor() { }

  ngOnInit(): void {
    const time = interval(1000);
    if(this.playing){
      time.subscribe((element) => {
        this.timer = element;
      })
    }
  }

}
