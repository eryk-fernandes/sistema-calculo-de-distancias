import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class APIService {

  private url = 'https://api.distancematrix.ai/maps/api/distancematrix/json';

  constructor(private http: HttpClient) {}

  calcularDistancia(pontoA: string, pontoB: string): Observable<any> {
    const params = new HttpParams()
      .set('origins', pontoA)
      .set('destinations', pontoB)
      .set('mode', 'driving')
      .set('key', environment.apiKey);

    return this.http.get<any>(this.url, { params });
  }
}
