import { Component, effect, signal } from '@angular/core';
import * as L from 'leaflet';
import { SharedService } from '../../shared/shared-service';

@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.html',
  styleUrls: ['./mapa.css'],
})
export class Mapa {
  private mapa = signal<L.Map | null>(null);
  private pontoA = signal<L.Marker | null>(null);
  private pontoB = signal<L.Marker | null>(null);
  private contador = 0;

  constructor(private sharedService: SharedService) {
    effect(() => {
      if (this.sharedService.limpar()) {
        if (this.pontoA()) this.mapa()?.removeLayer(this.pontoA()!);
        if (this.pontoB()) this.mapa()?.removeLayer(this.pontoB()!);
        this.pontoA.set(null);
        this.pontoB.set(null);
        this.contador = 0;
        this.sharedService.reiniciarPontos();
      }
    });
  }

  ngOnInit(): void {
    this.inicializarMapa();
    this.adicionarPontos();
  }

  private inicializarMapa(): void {
    this.mapa.set(L.map('map').setView([-16, -47], 5));
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.mapa() as L.Map);
  }

  private adicionarPontos(): void {
    const map = this.mapa()!;
    map.on('click', (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      const marcador = L.marker([lat, lng]).addTo(map);

      if (this.contador === 0) {
        this.pontoA.set(marcador);
        console.log(this.pontoA()?.getLatLng());
        this.contador++;
      } else if (this.contador === 1) {
        this.pontoB.set(marcador);
        console.log(this.pontoB()?.getLatLng());
        this.contador++;
      } else {
        map.removeLayer(this.pontoA()!);
        map.removeLayer(this.pontoB()!);
        this.pontoA.set(marcador);
        this.pontoB.set(null);
        this.contador = 1;
      }
    });
  }
}
