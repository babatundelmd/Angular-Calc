import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  input: any = '';
  result = '';

  constructor(private theme: ThemeService) {}

  ngOnInit() {}

  reset() {
    this.input = '';
    this.result = '';
  }

  delete() {
    if (this.input != '') {
      this.input = this.input.substr(0, this.input.length - 1);
    }
    // console.log(this.input);
    // console.log(this.result);
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
    // console.log(this.input);
    pos = this.input.toString().lastIndexOf('+');
    if (this.input.toString().lastIndexOf('-') > pos)
      pos = this.input.lastIndexOf('-');
    if (this.input.toString().lastIndexOf('*') > pos)
      pos = this.input.lastIndexOf('*');
    if (this.input.toString().lastIndexOf('/') > pos)
      pos = this.input.lastIndexOf('/');
    // console.log('Last ' + this.input.substr(pos + 1));
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
      formula = new String(formula.substr(0, formula.length - 1));
    }
    this.result = eval(formula.toString());
  }

  getAnswer() {
    this.playSoundAnswer();
    this.calcAnswer();
    this.input = this.result;
    if (this.input == '0') this.input = '';
  }
}
