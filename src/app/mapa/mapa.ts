import { Component } from '@angular/core';
import * as L from 'leaflet';
import { signal } from '@angular/core';

@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.html',
  styleUrl: './mapa.css'
})
export class Mapa {
  private mapa = signal<L.Map | null>(null);
    ngOnInit(): void {
    this.inicializarMapa();
  }

  private inicializarMapa(): void {
    this.mapa.set(L.map('map').setView([-16, -47], 5));
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.mapa() as L.Map);
  }

}
