import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgxSnakeComponent } from 'ngx-snake';
import { interval } from 'rxjs';
import { DataService } from '../Services/data.service';
import { ScoreService } from '../Services/score.service';
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  name = '';
  timer: number = 0;
  playing: boolean = true;
  gameStatus: string = 'Ready to go';
  gameHistory: Array<string> = [];
  points: number = 0;
  sort: Array<any> = [{description: 'From earliest to latest'}, {description: 'From latest to earliest'}];
  defaultSortValue: string = 'From earliest to latest'; //used for sort table
  filteredString: string = '';
  resetTimer: boolean = false;
  disableDropdownFilter: boolean = true;
  scores: any = [];
  

  public gameStatusStart(){
    this.gameStatus = 'Game is running'
    this.gameHistory.push(`Second ${this.timer}: ` + this.gameStatus)
    this.resetTimer = false;
    this.disableDropdownFilter = false;
    console.log(this.points)
  }
  public gameStatusEnd(){
    this.gameStatus = 'Game over'
    this.gameHistory.push(`Second ${this.timer}: ` + this.gameStatus)
  }
  public gameStatusReset(){
    this.gameStatus = 'Ready to go'
    this.gameHistory.push(`Second ${this.timer}: ` + 'Game restarted and ready to go')
    this.gameHistory.push(`You gained ${this.points} points!`)
    this.resetTimer = true;
    this.points = 0;
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
  public pointsCount() {
    this.points++;
    console.log(this.points)
  }

  constructor(
    private data: DataService,
    private score: ScoreService
  ) {
    this.score.fetchScore().subscribe((data) => {
      console.log(typeof data)
      console.log(data)
      this.scores = data;
      console.log(Object.keys(this.scores))
      // put data to variable and then show it
    });
   }

  ngOnInit(): void {
    const time = interval(1000);
    if(this.playing){
      time.subscribe((element) => {
        this.timer = element;
      })
    }

    this.data.share.subscribe((value: string) => this.name = value);
  }
}
