import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';

@Component({
  standalone: true,
  imports: [AdminHomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'admin';
}
