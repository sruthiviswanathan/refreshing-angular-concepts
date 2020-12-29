import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() eventFired = new EventEmitter<number>();
  gameControl;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart() {
    this.gameControl = setInterval(() =>{
      this.eventFired.emit(this.counter);
      this.counter++;
    }, 1000)
  }

  onGameStop() {
    clearInterval(this.gameControl);
  }

}
