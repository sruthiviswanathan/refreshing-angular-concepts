import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onEventFired(firedValue: number) {
    if (firedValue % 2 == 0) {
      this.evenNumbers.push(firedValue);    
    } else {
      this.oddNumbers.push(firedValue); 
    }
  }
}
