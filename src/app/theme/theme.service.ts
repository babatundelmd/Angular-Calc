import { Injectable } from '@angular/core';
import { Theme, light, dark, neon } from './theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private active: Theme = light;
  private availableThemes: Theme[] = [light, dark, neon];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  isNeonTheme(): boolean {
    return this.active.name === neon.name;
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setNeonTheme(): void {
    this.setActiveTheme(neon);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;
    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
