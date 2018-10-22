import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {
  private goals = new BehaviorSubject<any>(['Be the best father', 'Be fitness', 'Be a great Swimmer']);
  goal = this.goals.asObservable();
  constructor() { }

  changeGoal(goal)  {
    this.goals.next(goal);
  }

}



