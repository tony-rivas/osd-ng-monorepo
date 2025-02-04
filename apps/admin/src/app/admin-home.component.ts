import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Welcome Admin Users</h1>
    <ul>
      <li>
        <a rel="noopener noreferrer" target="" href="http://localhost:4300"
          >Local: Go to OSD Home</a
        >
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target=""
          href="https://www.onestopdesk.top"
          >Prod: Go to OSD Home</a
        >
      </li>
    </ul> `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class AdminHomeComponent {}
