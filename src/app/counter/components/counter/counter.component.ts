import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>counter:{{ counter }}</h3>

    <button (click)="increaseBy()">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy()">-1</button>`,
})
export class CounterComponent {
  constructor() {}
  public counter: number = 10;
  public counterInicial: number = 10;

  increaseBy(): void {
    this.counter += 1;
  }

  decreaseBy(): void {
    this.counter -= 1;
  }

  reset(): void {
    this.counter = this.counterInicial; // para no tener otra variable se podría poner this.counter = 10;
  }
}
