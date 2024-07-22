import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Welcome to One Stop Desktop</h1>
    <ul>
      <li>
        <a rel="noopener noreferrer" target="" href="http://localhost:4400"
          >Local: Go to Admin</a
        >
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target=""
          href="https://www.admin.onestopdesk.top"
          >Prod: Go to Admin</a
        >
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.tools.onestopdesk.top"
          >Prod - Only: Go to Dev Tools</a
        >
      </li>
    </ul>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {}
