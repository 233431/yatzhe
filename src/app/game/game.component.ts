
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  diceValues: number[] = [1, 1, 1, 1, 1];
  diceLocks: boolean[] = [false, false, false, false, false];
  rollsLeft: number = 3;
  totalTurns: number = 3;  //Numero maximo de oportunidades por turno
  score: number = 0;
  turnFinished: boolean = false;

  rollDice() {
    if (this.rollsLeft > 0 && !this.turnFinished) {
      for (let i = 0; i < this.diceValues.length; i++) {
        if (!this.diceLocks[i]) {
          this.diceValues[i] = Math.floor(Math.random() * 6) + 1;
        }
      }
      this.rollsLeft--;

      if (this.rollsLeft === 0) {
        this.turnFinished = true;  
      }
    }
  }

  toggleDiceLock(index: number) {
    if (this.rollsLeft < 3 && !this.turnFinished) { 
      this.diceLocks[index] = !this.diceLocks[index];
    }
  }

  resetGame() {
    this.diceValues = [1, 1, 1, 1, 1];
    this.diceLocks = [false, false, false, false, false];
    this.rollsLeft = this.totalTurns;
    this.score = 0;
    this.turnFinished = false;
  }

  markPlay() {
    if (this.turnFinished) {
      this.calculateScore(); 
      this.turnFinished = false;  // Restablecer el estado de finalización del turno
      this.rollsLeft = this.totalTurns;
      this.diceLocks = [false, false, false, false, false];
    }
  }

  calculateScore() {
   
    this.score += this.diceValues.reduce((a, b) => a + b, 0);  //  Suma todos los valores
  }
}
