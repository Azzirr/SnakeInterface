import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ScoreService {
  constructor(private http: HttpClient ) { }

  // Adding your score to score list. POST method
  addScore(){

  }

  // Fetching scores from database. GET method
  fetchScore(){
    const URL = 'http://scores.chrum.it/scores/snake';
    return this.http.get(URL, 
      {headers: new HttpHeaders({
        'accept' : 'application/json'
      })});
  }
}