import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Welcome Admin Users</h1>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class AdminHomeComponent {}
