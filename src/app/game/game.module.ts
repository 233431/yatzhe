
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { DiceModule } from '../dice/dice.module';
import { ScoreModule } from '../score/score.module';

@NgModule({
  declarations: [GameComponent],
  imports: [CommonModule, DiceModule, ScoreModule],
  exports: [GameComponent]
})
export class GameModule {}
