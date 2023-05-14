import { Component, OnInit } from '@angular/core';
import { Game } from './Models/game';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'the gaming company';
  games!: Array<Game> ;
  filteredGames!: Array<Game>;
  selectedGame?: Game;

  ngOnInit(): void {
    this.games = [{
      name: 'GTA',
      publishedOn: new Date('10-10-2010'),
      author: 'Rockstar',
      mode: {id: 1, name: 'Action'},
      copies: 1000000
    },
    {
      name: 'FIFA',
      publishedOn: new Date('10-10-2010'),
      author: 'EA',
      mode: {id: 4, name: 'Sports'},
      copies: 1000000
    },
    {
      name: 'PUBG',
      publishedOn: new Date('10-10-2010'),
      author: 'Tencent',
      mode: {id: 2, name: 'Adventure'},
      copies: 1000000
    },
    {
      name: 'COD',
      publishedOn: new Date('10-10-2010'),
      author: 'Activision',
      mode: {id: 1, name: 'Action'},
      copies: 1000000
    },
    {
      name: 'CSGO',
      publishedOn: new Date('10-10-2010'),
      author: 'Valve',
      mode: {id: 1, name: 'Action'},
      copies: 1000000
    }];

    this.filteredGames = this.games;
  }

  onClick(game:Game):void{
    this.selectedGame = game;
  }

  filterByCategory(categoryId: number): void{
    if(categoryId === 0){
      this.filteredGames = this.games;
      return;
    }
    this.filteredGames = this.games.filter(g => g.mode.id === categoryId);
  }

}
