import { Component } from '@angular/core';
import {Mapa} from "./mapa/mapa";
import { Medidor } from "./medidor/medidor";

@Component({
  selector: 'app-layout',
  imports: [Mapa, Medidor],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
