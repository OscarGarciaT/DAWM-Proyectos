import { Component, OnInit } from '@angular/core';

export interface Game {
  nombre: string;
  url: string;
}

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  games: Game[] = [
    {
      nombre: "Valorant",
      "url": "https://i.ibb.co/dWdJ3HK/valorant.png"
    },
    {
      nombre: "Valorant",
      "url": "https://i.ibb.co/dWdJ3HK/valorant.png"
    },
    {
      nombre: "Valorant",
      "url": "https://i.ibb.co/dWdJ3HK/valorant.png"
    },
    {
      nombre: "Valorant",
      "url": "https://i.ibb.co/dWdJ3HK/valorant.png"
    },
    {
      nombre: "Valorant",
      "url": "https://i.ibb.co/dWdJ3HK/valorant.png"
    },
    {
      nombre: "Valorant",
      "url": "https://i.ibb.co/dWdJ3HK/valorant.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
