import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Medidor } from "./medidor/medidor";
import { Mapa } from "./mapa/mapa";

@Component({
  selector: 'app-root',
  imports: [Medidor, Mapa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('medidor-distancia');
}
