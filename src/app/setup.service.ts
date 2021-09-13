import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  private team1data: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private team2data: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private team3data: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private team4data: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private level: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private numTeams: BehaviorSubject<string> = new BehaviorSubject<string>('');



  output1 = this.team1data.asObservable();
  output2 = this.team2data.asObservable();
  output3 = this.team3data.asObservable();
  output4 = this.team4data.asObservable();
  output5 = this.level.asObservable();
  output6 = this.numTeams.asObservable();


  constructor() { }

  sendInfo1(gameinfo: string) {
    this.team1data.next(gameinfo)
  }

  sendInfo2(gameinfo2: string) {
    this.team2data.next(gameinfo2)
  }

  sendInfo3(gameinfo3: string) {
    this.team3data.next(gameinfo3)
  }
  sendInfo4(gameinfo4: string) {
    this.team4data.next(gameinfo4)
  }

  sendLevel(level: string) {
    this.level.next(level)
  }

  sendNum(numTeams: string) {
    this.numTeams.next(numTeams)
  }

}
