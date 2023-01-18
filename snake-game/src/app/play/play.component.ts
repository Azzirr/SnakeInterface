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

  public gameStatusStart(){
    this.gameStatus = 'Game is running'
    this.gameHistory.push(this.gameStatus)
  }
  public gameStatusEnd(){
    this.gameStatus = 'Game over'
    this.gameHistory.push(this.gameStatus)
  }
  public gameStatusReset(){
    this.gameStatus = 'Ready to go'
    this.gameHistory.push('Game restarted and ready to go')
  }
  public gameStatusPaused(){
    this.gameStatus = 'Game is paused'
    this.gameHistory.push(this.gameStatus)
  }
  public exitButton(){
    this.playing = false;
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
