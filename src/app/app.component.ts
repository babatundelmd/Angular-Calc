import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  mainText: any = '';
  subText = '';
  operand1: any; // The first operand
  operand2: any; // The second operand
  operator = ''; // The operator
  calculationString = '';
  deleteString: any = '';
  // This is the string that denotes the operation being performed
  answered = false;
  // A flag to check whether the solution has been processed
  operatorSet = false; // You'll see how this is used soon

  constructor(private theme: ThemeService) {}

  ngOnInit() {}

  getAnswer() {
    this.playSoundAnswer();
    this.calculationString = this.mainText;
    this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);
    if (this.operator === '/') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 / this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = this.mainText.substr(0, 9);
      }
    } else if (this.operator === 'x') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 * this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = '';
        this.subText = '';
      }
    } else if (this.operator === '-') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 - this.operand2).toString();
      this.subText = this.calculationString;
    } else if (this.operator === '+') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 + this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = '';
        this.subText = '';
      }
    } else {
      this.subText = '';
    }
    this.answered = true;
  }

  reset() {
    this.mainText = '';
    this.deleteString = '';
  }

  delete() {
    if (this.mainText != '') {
      this.mainText = this.mainText.substr(0, this.mainText.length - 1);
    }
  }

  pressKey(key: any) {
    this.playSound();
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      const lastKey = this.mainText[this.mainText.length - 1];
      if (
        lastKey === '/' ||
        lastKey === 'x' ||
        lastKey === '-' ||
        lastKey === '+'
      ) {
        this.operatorSet = true;
      }
      if (this.operatorSet || this.mainText === '') {
        return;
      }
      this.operand1 = parseFloat(this.mainText);
      this.operator = key;
      this.operatorSet = true;
    }
    if (this.mainText.length === 10) {
      return;
    }
    this.mainText += key;
  }

  onToggle(input: any) {
    if (input === 'light') {
      this.theme.setLightTheme();
    }
    if (input === 'dark') {
      this.theme.setDarkTheme();
    }
    if (input === 'neon') {
      this.theme.setNeonTheme();
    }
  }

  playSound() {
    let audio = new Audio();
    audio.src = 'assets/keypad/scifi.mp3';
    audio.load();
    audio.play();
  }

  playSoundAnswer() {
    let audio = new Audio();
    audio.src = 'assets/keypad/mech.mp3';
    audio.load();
    audio.play();
  }
}
