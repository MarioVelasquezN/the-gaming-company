import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../Models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{

  @Input() game?: Game;

  constructor() { }

  ngOnInit(): void {
  }

  onLoan(): void{
    if(this.game && this.game.copies > 0){
      this.game.copies--;
    }
  }

  onReturn(): void{
    if(this.game && this.game.copies < 1000000){
      this.game.copies++;
    }
  }
}
