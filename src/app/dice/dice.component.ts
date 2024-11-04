
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dice',
  template: `<div (click)="toggleLock()" [class.locked]="locked">{{ value }}</div>`,
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  @Input() value: number = 1;
  @Input() locked: boolean = false;
  @Output() lockToggle = new EventEmitter<void>();

  toggleLock() {
    this.lockToggle.emit();
  }
}
