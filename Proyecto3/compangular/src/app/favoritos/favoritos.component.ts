import { Component, OnInit } from '@angular/core';

export interface Game {
  nombre: string;
  url: string;
}

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  games: Game[] = [
    {
      nombre: "VALORANT",
      "url": "https://i.ibb.co/dWdJ3HK/valorant.png"
    },
    {
      nombre: "VALORANT",
      "url": "https://i.ibb.co/dWdJ3HK/valorant.png"
    },
    {
      nombre: "VALORANT",
      "url": "https://i.ibb.co/dWdJ3HK/valorant.png"
    },
    {
      nombre: "VALORANT",
      "url": "https://i.ibb.co/dWdJ3HK/valorant.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
