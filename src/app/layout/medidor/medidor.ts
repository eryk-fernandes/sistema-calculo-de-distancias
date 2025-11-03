import { SharedService } from './../../shared/shared-service';
import { Component } from '@angular/core';
import { APIService } from '../../api/apiservice';

@Component({
  selector: 'app-medidor',
  imports: [],
  templateUrl: './medidor.html',
  styleUrl: './medidor.css',
})
export class Medidor {
  pontoA: any = 'Indefinido';
  pontoB: any = 'Indefinido';
  resultado: any = '0 km';

  constructor(private sharedService: SharedService, private apiService: APIService) {}

  ngOnInit() {
    this.sharedService.pontoAData$.subscribe((pontoA) => {
      this.pontoA = `${pontoA.lat.toFixed(4)},${pontoA.lng.toFixed(4)}`;
    });
    this.sharedService.pontoBData$.subscribe((pontoB) => {
      this.pontoB = `${pontoB.lat.toFixed(4)},${pontoB.lng.toFixed(4)}`;
    });
  }

  calcularDistancias(): void {
    this.resultado = 'Calculando...';
    this.resultado = this.calcularDistancia(this.pontoA, this.pontoB);
  }

  calcularDistancia(pontoACoord: any, pontoBCoord: any) {
    this.apiService.calcularDistancia(pontoACoord, pontoBCoord).subscribe({
      next: (res) => (this.resultado = res.rows[0].elements[0].distance.text),
      error: (err) => console.error(err),
  })
};

  limparPontos(): void {
    this.sharedService.limparPontos();
  }

  resetarTudo() {
    this.sharedService.setLimpar(true);
    this.pontoA = '';
    this.pontoB = '';
    this.resultado = '0 km';
  }
}
