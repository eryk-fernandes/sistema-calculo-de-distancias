import { Component, signal } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.html',
  styleUrls: ['./mapa.css'],
})
export class Mapa {
  private mapa = signal<L.Map | null>(null);

  constructor() {}

  ngOnInit(): void {
    this.inicializarMapa();
  }

  private inicializarMapa(): void {
    this.mapa.set(L.map('map').setView([-16, -47], 5));
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.mapa() as L.Map);
  }
}
