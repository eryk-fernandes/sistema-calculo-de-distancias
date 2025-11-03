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
  pontoA: any = '0,0';
  pontoB: any = '0,0';
  resultado: any = '0 km';
  mensagem: any = '';

  constructor(private sharedService: SharedService, private apiService: APIService) {}

  ngOnInit() {
    this.sharedService.pontoAData$.subscribe((pontoA) => {
      this.pontoA = `${pontoA.lat.toFixed(4)},${pontoA.lng.toFixed(4)}`;
      this.mensagem = '';
    });
    this.sharedService.pontoBData$.subscribe((pontoB) => {
      this.pontoB = `${pontoB.lat.toFixed(4)},${pontoB.lng.toFixed(4)}`;
      this.mensagem = '';
    });
  }

  calcularDistancias(): void {
    if (this.pontoA === '0,0' || this.pontoB === '0,0') {
      this.mensagem = 'Marque ambos os pontos no mapa!';
      return;
    }
    this.resultado = this.calcularDistancia(this.pontoA, this.pontoB);
    this.mensagem = '';
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
    this.pontoA = '0,0';
    this.pontoB = '0,0';
    this.resultado = '0 km';
    this.mensagem = '';
  }
}
