import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
    RouterOutlet,
  ],
  template: `
    <main>
    <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/home-logo.svg" alt="logo" aria-hidden="true">
          <h2>Homes</h2>
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

