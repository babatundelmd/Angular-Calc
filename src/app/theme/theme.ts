export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    //   Background
    '--main-background': 'hsl(222, 26%, 31%)',
    '--toggle-background-keypad-background': 'hsl(223, 31%, 20%)',
    '--screen-background': 'hsl(224, 36%, 15%)',
    // keys
    '--key-background': 'hsl(225, 21%, 49%)',
    '--key-shadow': 'hsl(224, 28%, 35%)',
    '--key-background-toggle': 'hsl(6, 63%, 50%)',
    '--dark-red-key-shadow': 'hsl(6, 70%, 34%)',
    '--light-grayish-orange-key-background': 'hsl(30, 25%, 89%)',
    '--grayish-orange-key-shadow': 'hsl(28, 16%, 65%)',
    // Text
    '--very-dark-grayish-blue': 'hsl(221, 14%, 31%)',
    '--white': '#fff',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    //   Background
    '--main-background': 'hsl(0, 0%, 90%)',
    '--toggle-background-keypad-background': 'hsl(0, 5%, 81%)',
    '--screen-background': 'hsl(0, 0%, 93%)',
    // Keys
    '--key-background': 'hsl(185, 42%, 37%)',
    '--key-shadow': 'hsl(185, 58%, 25%)',
    '--key-background-toggle': 'hsl(25, 98%, 40%)',
    '--dark-orange-key-shadow': 'hsl(25, 99%, 27%)',
    '--light-grayish-yellow-key-background': 'hsl(45, 7%, 89%)',
    '--dark-grayish-orange-key-shadow': 'hsl(35, 11%, 61%)',
    // Text
    '--very-dark-grayish-yellow': 'hsl(60, 10%, 19%)',
    '--white': '#fff',
  },
};

export const neon: Theme = {
  name: 'neon',
  properties: {
    //   Background
    '--main-background': 'hsl(268, 75%, 9%)',
    '--toggle-background-keypad-background': 'hsl(268, 71%, 12%)',
    '--screen-background': 'hsl(268, 71%, 12%)',
    // Keys
    '--key-background': 'hsl(281, 89%, 26%)',
    '--key-shadow': 'hsl(285, 91%, 52%)',
    '--key-background-toggle': 'hsl(176, 100%, 44%)',
    '--soft-cyan-key-shadow': 'hsl(177, 92%, 70%)',
    '--dark-violet-key-background': 'hsl(268, 47%, 21%)',
    '--dark-magenta-key-shadow': 'hsl(290, 70%, 36%)',
    // Text
    '--light-yellow': 'hsl(60, 10%, 19%)',
    '--very-dark-blue': 'hsl(198, 20%, 13%)',
    '--white': '#fff',
  },
};
