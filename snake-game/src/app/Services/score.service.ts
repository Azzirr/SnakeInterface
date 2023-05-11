import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ScoreService {
  constructor(private http: HttpClient ) { }
  
  token: string = '';
  getAuth(auth: string){
    this.token = auth;
    console.log(this.token);
  }
  // Adding your score to score list. POST method
  addScore(score: {'name': string, 'game': string, 'score': string}){
    let scoreToPost: object = {
      ...score,
      'auth-token': this.token
    }
    let alert: string = 'Are you sure?';
    if(confirm(alert) === true){
      const headers = new HttpHeaders({'accept' : 'application/json'});
      this.http.post(
        'http://scores.chrum.it/scores/',
        scoreToPost, {headers: headers}).subscribe((response) => {
          console.log(response);
        })
    } else {
      return;
    }

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