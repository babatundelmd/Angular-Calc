import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-calc';

  constructor(private theme: ThemeService) {}

  ngOnInit() {}

  getAnswer() {
    this.playSoundAnswer();
  }

  reset() {}

  delete() {}

  pressKey(val: any) {
    this.playSound();
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
