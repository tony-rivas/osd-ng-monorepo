import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Welcome to One Stop Desktop</h1>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {}
