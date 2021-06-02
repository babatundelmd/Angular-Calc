import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent implements OnInit {
  @Output() clicked = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  toggle(input: any) {
    if (input === 'light') {
      console.log('Light Mutherfacker');
    }
  }

  onClick(value: string) {
    this.clicked.emit(value);
  }
}
