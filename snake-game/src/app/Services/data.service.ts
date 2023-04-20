import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private content = new BehaviorSubject<string>('Default Data');
  public share = this.content.asObservable();
  constructor() {

  }
  updateData(name: string){
    this.content.next(name);
  }
}
