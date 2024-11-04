
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  template: `<div>Puntaje: {{ score }}</div>`,
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  @Input() score: number = 0;
}
