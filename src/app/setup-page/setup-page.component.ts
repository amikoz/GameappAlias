import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { SetupService } from '../setup.service'


let words_easy = ["tent", "dress", "jeans", "raincoat", "backpack", "scarf", "slippers", "jacket", "t-shirt", "skirt"]
let randWord = "";
let points = 0;

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {
  public toggleButton: boolean = false;
  isShow = false;


  team1:string = '';
  team2:string = '';
  team3:string = '';
  team4:string = '';
  levelofthegame: string = '';
  selectedNumber: string = '';

  constructor(private setupService: SetupService) { }

  ngOnInit(): void {

  }

  editTheInfo1(){
    this.setupService.sendInfo1(this.team1)
  }

  editTheInfo2(){
    this.setupService.sendInfo2(this.team2)
  }

  editTheInfo3(){
    this.setupService.sendInfo3(this.team3)
  }

  editTheInfo4(){
    this.setupService.sendInfo4(this.team4)
  }

  getLevel(){
    this.setupService.sendLevel(this.levelofthegame);
  }

  getNum(){
    this.setupService.sendNum(this.selectedNumber);
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

}
