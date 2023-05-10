import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ScoreService {
  constructor(private http: HttpClient ) { }
  
  // Adding your score to score list. POST method
  addScore(){
    let data = {
      "name": "big floppa",
      "game": "snake",
      "score": "69",
      // "auth-token": "1234"
    }
    this.http.post('http://scores.chrum.it/scores', data)
    .subscribe((response) => {
      console.log(response)
    });
    return this.http.post('http://scores.chrum.it/scores', {})
  }

  // Fetching scores from database. GET method
  fetchScore(){
    const URL = 'http://scores.chrum.it/scores/snake';
    return this.http.get<Array<any>>(URL, 
      {headers: new HttpHeaders({
        'accept' : 'application/json'
      })});
  }
}