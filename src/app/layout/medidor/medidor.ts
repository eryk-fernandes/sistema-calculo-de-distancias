import { SharedService } from './../../shared/shared-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-medidor',
  imports: [],
  templateUrl: './medidor.html',
  styleUrl: './medidor.css',
})
export class Medidor {
  constructor(private sharedService: SharedService) {}

  limparPontos(): void {
    this.sharedService.limparPontos();
  }
  
}
