import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  public limpar = signal(false);

  limparPontos(): void {
    this.limpar.set(true);
  }

  reiniciarPontos(): void {
    this.limpar.set(false);
  }
}
