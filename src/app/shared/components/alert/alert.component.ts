import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() message: string;
  @Output() clearAlert = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.clearAlert.emit();
  }
}
