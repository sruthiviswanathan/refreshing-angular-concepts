import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  showParagraph = false;
  timestamp = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.timestamp.push(new Date().toISOString());
    this.showParagraph = !this.showParagraph;
    return this.showParagraph;
  }
}
