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
  // This is the string that denotes the operation being performed
  answered = false;
  // A flag to check whether the solution has been processed
  operatorSet = false; // You'll see how this is used soon

  input: any = '';
  result: any = '';

  constructor(private theme: ThemeService) {}

  ngOnInit() {}

  // getAnswer() {
  //   this.playSoundAnswer();
  //   this.calculationString = this.mainText;
  //   this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);
  //   if (this.operator === '/') {
  //     this.subText = this.mainText;
  //     this.mainText = (this.operand1 / this.operand2).toString();
  //     this.subText = this.calculationString;
  //     if (this.mainText.length > 9) {
  //       this.mainText = this.mainText.substr(0, 9);
  //     }
  //   } else if (this.operator === '*') {
  //     this.subText = this.mainText;
  //     this.mainText = (this.operand1 * this.operand2).toString();
  //     this.subText = this.calculationString;
  //     if (this.mainText.length > 9) {
  //       this.mainText = '';
  //       this.subText = '';
  //     }
  //   } else if (this.operator === '-') {
  //     this.subText = this.mainText;
  //     this.mainText = (this.operand1 - this.operand2).toString();
  //     this.subText = this.calculationString;
  //   } else if (this.operator === '+') {
  //     this.subText = this.mainText;
  //     this.mainText = (this.operand1 + this.operand2).toString();
  //     this.subText = this.calculationString;
  //     if (this.mainText.length > 9) {
  //       this.mainText = '';
  //       this.subText = '';
  //     }
  //   } else {
  //     this.subText = '';
  //   }
  //   this.answered = true;
  // }

  reset() {
    // this.mainText = '';
    this.input = '';
    this.result = '';
  }

  delete() {
    if (this.mainText != '') {
      this.mainText = this.mainText.substr(0, this.mainText.length - 1);
    }
  }

  // pressKey(key: any) {
  //   this.playSound();
  //   if (key === '/' || key === '*' || key === '-' || key === '+') {
  //     const lastKey = this.mainText[this.mainText.length - 1];
  //     if (
  //       lastKey === '/' ||
  //       lastKey === '*' ||
  //       lastKey === '-' ||
  //       lastKey === '+'
  //     ) {
  //       this.operatorSet = true;
  //     }
  //     if (this.operatorSet || this.mainText === '') {
  //       return;
  //     }
  //     this.operand1 = parseFloat(this.mainText);
  //     this.operator = key;
  //     this.operatorSet = true;
  //   }
  //   if (this.mainText.length === 10) {
  //     return;
  //   }
  //   this.mainText += key;
  // }

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

  pressKey(num: string) {
    this.playSound();
    //Do Not Allow . more than once
    if (num == '.') {
      if (this.input != '') {
        const lastNum = this.getLastOperand();
        if (lastNum.lastIndexOf('.') >= 0) return;
      }
    }

    //Do Not Allow 0 at beginning.
    //Javascript will throw Octal literals are not allowed in strict mode.
    if (num == '0') {
      if (this.input == '') {
        return;
      }
      const PrevKey = this.input[this.input.length - 1];
      if (
        PrevKey === '/' ||
        PrevKey === '*' ||
        PrevKey === '-' ||
        PrevKey === '+'
      ) {
        return;
      }
    }

    this.input = this.input + num;
    this.calcAnswer();
  }

  getLastOperand() {
    let pos: number;
    console.log(this.input);
    pos = this.input.toString().lastIndexOf('+');
    if (this.input.toString().lastIndexOf('-') > pos)
      pos = this.input.lastIndexOf('-');
    if (this.input.toString().lastIndexOf('*') > pos)
      pos = this.input.lastIndexOf('*');
    if (this.input.toString().lastIndexOf('/') > pos)
      pos = this.input.lastIndexOf('/');
    console.log('Last ' + this.input.substr(pos + 1));
    return this.input.substr(pos + 1);
  }

  pressOperator(op: string) {
    const lastKey = this.input[this.input.length - 1];
    if (
      lastKey === '/' ||
      lastKey === '*' ||
      lastKey === '-' ||
      lastKey === '+'
    ) {
      return;
    }

    this.input = this.input + op;
    this.calcAnswer();
  }

  calcAnswer() {
    let formula = this.input;
    let lastKey = formula[formula.length - 1];
    if (lastKey === '.') {
      formula = formula.substr(0, formula.length - 1);
    }
    lastKey = formula[formula.length - 1];
    if (
      lastKey === '/' ||
      lastKey === '*' ||
      lastKey === '-' ||
      lastKey === '+' ||
      lastKey === '.'
    ) {
      formula = formula.substr(0, formula.length - 1);
    }
    this.result = eval(formula);
  }

  getAnswer() {
    this.playSoundAnswer();
    this.calcAnswer();
    this.input = this.result;
    if (this.input == '0') this.input = '';
  }
}
