import { Component, OnInit } from '@angular/core';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { SetupService } from '../setup.service'

let words_easy = ["tent", "dress", "jeans", "raincoat", "backpack", "scarf", "slippers", "jacket", "t-shirt", "skirt", "shoes", "glove", "shorts", "perfume", "mirror", "headache", "sunglasses", "lighter", "chocolate", "flower", "trolley", "supermarket", "beer", "cigarettes", "fish", "sweetcorn", "tomato", "carrot", "watermelon", "peach", "orange", "grapefruit", "lemon", "grapes", "avocado", "olive", "ketchup", "egg", "milk", "cheese", "ice-cream", "flour", "bagel", "muffin", "cake", "cafe", "water", "lemonade", "vodka", "tea", "rice", "nuts", "waiter", "hot dog", "burger", "pizza", "spaghetti", "fish and chips", "fries chicken", "sandwich", "taco", "baguette", "sausage", "croissant", "salmon", "tuna", "shrimp", "desk", "pen", "pencil", "notebook", "pencil case", "textbook", "library", "lunch", "light", "camera", "pig", "sheep", "cow", "turkey", "horse", "dog", "cat", "hamster", "goldfish", "teacher", "doctor", "dentist", "vet", "security guard", "police", "barber", "fireman", "driving license", "driver", "singer", "traffic light", "window", "bell", "car", "door", "fuel tank", "seat", "tyre", "lock", "key", "brake", "helmet", "train", "ship", "airplane", "motobike", "bike", "airport", "passport", "ticket", "football", "basketball", "swimming pool", "tennis", "jogging", "ski", "ball", "life jacket", "concert", "theater", "guitar", "piano", "drums", "violin", "bass", "saxophone", "casino", "museum", "park", "hotel", "see", "sky", "lake"]
let words_medium = ["taxi cab", "standing ovation", "alarm clock", "alarm clock", "tool", "banana peel", "flagpole", "money", "wallet", "ballpoint pen", "sunburn", "wedding ring", "spy", "baby-sitter", "aunt", "acne", "bib", "puzzle piece", "pawn", "astronaut", "tennis shoes", "blue jeans", "twig", "outer space", "banister", "batteries", "doghouse", "campsite", "plumber", "bedbug", "throne", "tiptoe", "log", "mute", "pogo stick", "stoplight", "ceiling fan", "bedspread", "bite", "stove", "windmill", "nightmare", "stripe", "spring", "wristwatch", "eat", "matchstick", "gumball", "bobsled", "bonnet", "flock", "sprinkler", "living room", "laugh", "snuggle", "sneeze", "bud", "elf", "headache", "slam dunk", "Internet", "saddle", "ironing board", "bathroom scale", "kiss", "shopping cart", "shipwreck", "funny", "glide", "lamp", "candlestick", "grandfather", "rocket", "home movies", "seesaw", "rollerblades", "smog", "grill", "goblin", "coach", "claw", "cloud", "shelf", "recycle", "glue stick", "Christmas carolers", "front porch", "earache", "robot", "foil", "rib", "robe", "crumb", "paperback", "hurdle", "rattle", "fetch", "date", "iPod", "dance", "cello", "flute", "dock", "prize", "dollar", "puppet", "brass", "firefighter", "huddle", "easel", "pigpen", "bunk bed", "bowtie", "fiddle", "dentist", "baseboards", "letter opener", "photographer", "magic", "monster"]
let words_hard = ["whatever", "buddy", "sip", "chicken coop", "blur", "chime", "bleach", "clay", "blossom", "cog", "twitterpated", "wish", "through", "feudalism", "whiplash", "cot", "blueprint", "beanstalk", "think", "cardboard", "darts", "inn", "dock", "crow's nest", "BFF", "sheriff", "tiptop", "dot", "government", "garden hose", "blimp", "dress shirt", "reimbursement", "capitalism", "step-daughter", "applause", "bank system", "jade", "blunt", "application", "rag", "squint", "intern", "sow's ear", "brainstorm", "sling", "half", "pinch", "leak", "skating rink", "jog", "jamming", "shrink ray", "dent", "scoundrel", "escalator", "cell phone charger", "kitchen knife set", "sequins", "ladder rung", "flu", "scuff mark", "mast", "sash", "modern", "ginger", "clockwork", "mess", "mascot", "runt", "chain", "scar tissue", "suntan", "pomp", "scramble", "sentence", "first mate", "cuff", "cuticle", "fortnight", "riddle", "spool", "full moon", "forever", "rut", "hem", "new", "freight train", "diver", "fringe", "humidifier", "handwriting", "dawn", "dimple", "gray hairs", "hedge", "plank", "race", "publisher", "fizz", "gem", "ditch", "wool", "plaid", "fancy", "ebony and ivory", "feast", "Murphy's Law", "billboard", "flush", "inconceivable", "tide", "midsummer", "population", "cashmere", "elm", "organ", "flannel", "hatch", "booth"]

let randWord = "";

let result_team1 = 0;
let result_team2 = 0;
let result_team3 = 0;
let result_team4 = 0;


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  continue: boolean = false;
  continue2: boolean = false;
  continue3: boolean = false;

  randWordShow:boolean = false;

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
    result_team1 = result_team1 + 1;
    console.log(result_team1);
    this.result_team1 = result_team1;
  }

  guessed2() {
    result_team2 = result_team2 + 1;
    console.log(result_team2);
    this.result_team2 = result_team2;
  }
  guessed3() {
    result_team3 = result_team3 + 1;
    console.log(result_team3);
    this.result_team3 = result_team3;
  }
  guessed4() {
    result_team4 = result_team4 + 1;
    console.log(result_team4);
    this.result_team4 = result_team4;
  }

  config: CountdownConfig = { leftTime: 10, demand: true };
  notify = '';

  timeoutShow: boolean = false;

  handleEvent(e: CountdownEvent) {
    if (e.action === 'done') {
      this.notify += 'Time is over! Your result is ';
      this.timeoutShow = !this.timeoutShow;
      this.randWordShow = !this.randWordShow;
    }

  }

  results2Show:boolean = false;

  clickDisable: boolean = false;


  disable() {
    this.clickDisable = !this.clickDisable;
  }


}
