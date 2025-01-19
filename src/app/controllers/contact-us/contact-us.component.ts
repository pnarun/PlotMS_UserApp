import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  template: `
    <div class="contact-message">
      <h1>Contact us to Buy new plots or to Sell plots</h1>
    </div>
  `,
  styles: [`
    .contact-message {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -72px; /* Compensate for header height */
    }
    
    h1 {
      font-size: 2.5rem;
      color: #1e88e5;
      text-align: center;
      padding: 0 2rem;
      line-height: 1.4;
    }
  `]
})
export class ContactUsComponent {}
