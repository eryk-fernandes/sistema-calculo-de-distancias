import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  public limpar = signal(false);

  private pontoA = new BehaviorSubject<any>(null);
  pontoAData$ = this.pontoA.asObservable();

  private pontoB = new BehaviorSubject<any>(null);
  pontoBData$ = this.pontoB.asObservable();

  updatePontoA(pontoA: any) {
    this.pontoA.next(pontoA); 
  }

  updatePontoB(pontoB: any) {
    this.pontoB.next(pontoB); 
  }

  limparPontos(): void {
    this.limpar.set(true);
  }

  reiniciarPontos(): void {
    this.limpar.set(false);
  }
  
}
