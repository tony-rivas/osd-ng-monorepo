import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@Component({
  standalone: true,
  imports: [HomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'one-stop';
}
