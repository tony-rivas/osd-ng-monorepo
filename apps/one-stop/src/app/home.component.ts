import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Welcome to One Stop Desktop</h1>
    <ul>
      <li>
        <a target="" href="http://localhost:4400">Local: Go to Admin</a>
      </li>
      <li>
        <a target="" href="http://wwww.admin.onestopdesk.top"
          >Prod: Go to Admin</a
        >
      </li>
    </ul>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {}
