import { Component, OnInit } from '@angular/core';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { SetupService } from '../setup.service'

let words_easy = ["tent", "dress", "jeans", "raincoat", "backpack", "scarf", "slippers", "jacket", "t-shirt", "skirt"]
let words_medium = ["medium 1", "medium 2", "medium 3"]
let words_hard = ["hard 1", "hard 2", "hard 3"]

let randWord = "";
let points = 0;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  team1: string = '';
  team2: string = '';
  team3: string = '';
  team4: string = '';
  level: string = '';
  numTeams: string = '';

  constructor(private setupService: SetupService) { }

  ngOnInit(): void {
    this.setupService.output1.subscribe(team1 => this.team1 = team1)
    this.setupService.output2.subscribe(team2 => this.team2 = team2)
    this.setupService.output3.subscribe(team3 => this.team3 = team3)
    this.setupService.output4.subscribe(team4 => this.team4 = team4)
    this.setupService.output5.subscribe(level => this.level = level)
    this.setupService.output6.subscribe(numTeams => this.numTeams = numTeams)

  }

  randWord = randWord

  result_team1 = 0
  result_team2 = 0
  result_team3 = 0
  result_team4 = 0

  randomWord() {
    if (this.level == 'easy') {
      this.randWord = words_easy[Math.floor(Math.random() * words_easy.length)];
    }
    if (this.level == 'medium') {
      this.randWord = words_medium[Math.floor(Math.random() * words_medium.length)];
    }
    if (this.level == 'hard') {
      this.randWord = words_hard[Math.floor(Math.random() * words_hard.length)];
    }
  }

  guessed1() {
    points = points + 1;
    console.log(points);
    this.result_team1 = points;
  }

  guessed2() {
    points = points + 1;
    console.log(points);
    this.result_team2 = points;
  }
  guessed3() {
    points = points + 1;
    console.log(points);
    this.result_team3 = points;
  }
  guessed4() {
    points = points + 1;
    console.log(points);
    this.result_team4 = points;
  }

  config: CountdownConfig = { leftTime: 10};
  notify = '';

  clickPoints: boolean = false;
  handleEvent(e: CountdownEvent) {
    if (e.action === 'done') {
      this.notify += 'Time is over! Your result is ';
      this.clickPoints = !this.clickPoints;
    }

  }

  click: boolean = false;
  disable() {
    this.click = !this.click;
  }

  continueClick(){
    
  }
}
