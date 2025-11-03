import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APIService } from '../api/apiservice';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  constructor(private apiService: APIService) {}

  private limpar = signal(false);
  limparPonto = this.limpar.asReadonly();

  setLimpar(v: boolean) {
    this.limpar.set(v);
  }

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
