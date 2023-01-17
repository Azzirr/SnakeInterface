import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snake-game';

  startSnake: boolean = false;
  receiveStart($event: any){
    this.startSnake = true;
  }
}
