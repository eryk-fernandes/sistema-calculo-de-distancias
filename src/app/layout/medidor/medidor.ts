import { SharedService } from './../../shared/shared-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-medidor',
  imports: [],
  templateUrl: './medidor.html',
  styleUrl: './medidor.css',
})
export class Medidor {

  pontoA: any = "Indefinido";
  pontoB: any = "Indefinido";
  resultado: any = '0 km';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.pontoAData$.subscribe(pontoA => {
      this.pontoA = `Lat: ${pontoA.lat.toFixed(4)}, Lng: ${pontoA.lng.toFixed(4)}`;
    });
    this.sharedService.pontoBData$.subscribe(pontoB => {
      this.pontoB = `Lat: ${pontoB.lat.toFixed(4)}, Lng: ${pontoB.lng.toFixed(4)}`;
    });
  }

  limparPontos(): void {
    this.sharedService.limparPontos();
  }
  
}
