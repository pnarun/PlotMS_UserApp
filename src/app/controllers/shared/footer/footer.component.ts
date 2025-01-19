import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <p>Copyright © ELVA Tech</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #1c2e4a;
      color: white;
      padding: 0.5rem 0;
      text-align: center;
      width: 100%;
      box-shadow: 0 -2px 4px rgba(0,0,0,0.2);
      margin: 0;
    }

    .footer p {
      margin: 0;
      font-size: 0.9rem;
    }

    .container {
      margin: 0 auto;
      padding: 0;
    }
  `]
})
export class FooterComponent {} 