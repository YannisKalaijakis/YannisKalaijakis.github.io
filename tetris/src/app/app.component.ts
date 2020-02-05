import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <game-board></game-board>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tetris';
}
