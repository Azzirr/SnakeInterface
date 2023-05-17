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
  timer: number = 0;
  playing: boolean = true;
  gameStatus: string = 'Ready to go';
  gameHistory: Array<string> = [];
  points: number = 0;
  sort: Array<any> = [{description: 'From earliest to latest'}, {description: 'From latest to earliest'}];
  sortScoresButton: Array<any> = [{description: 'Sort ascending'}, {description: 'Sort descending'}];
  defaultSortValue: string = 'From earliest to latest'; //used for sort table
  filteredString: string = '';
  resetTimer: boolean = false;
  disableDropdownFilter: boolean = true;
  scores: Array<any> = [];

  public gameStatusStart(){
    this.gameStatus = 'Game is running'
    this.gameHistory.push(`Second ${this.timer}: ` + this.gameStatus)
    this.resetTimer = false;
    this.disableDropdownFilter = false;
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
  }
  public sortScores(value: any){
    this.scores.reverse();
  }
  public sendScore(){
    let score = {
      'name': this.data.name, 
      'game': 'snake', 
      'score': this.points.toString(),
    }
    this.score.addScore(score)
  }

  constructor(
    public data: DataService,
    private score: ScoreService
  ) {
    this.score.fetchScore().subscribe((data) => {
      this.scores = data;
      console.log(typeof this.scores[1].score)
      
      this.scores = this.scores.sort(function(a: any, b: any){
        return b.score - a.score
      }).slice(0, 10)
    });
   }

  ngOnInit(): void {
    const time = interval(1000);
    if(this.playing){
      time.subscribe((element) => {
        this.timer = element;
      })
    }
  }
}
