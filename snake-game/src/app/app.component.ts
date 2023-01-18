import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snake-game';

  startSnake: boolean = false;
  @Input() name: string = '';
  receiveStart($event: any){
    this.startSnake = true;
  }
  insertName1(task: string){
    this.name = task;
    console.log(this.name)
  }
  getStartStopValue(value: boolean){
    this.startSnake = value;
  }

}
