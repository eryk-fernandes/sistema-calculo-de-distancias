import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Medidor } from "./medidor/medidor";

@Component({
  selector: 'app-root',
  imports: [Medidor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('medidor-distancia');
}
