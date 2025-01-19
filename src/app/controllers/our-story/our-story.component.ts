import { Component } from '@angular/core';

@Component({
  selector: 'app-our-story',
  standalone: true,
  template: `
    <div class="coming-soon">
      <h1>Coming soon!!!</h1>
    </div>
  `,
  styles: [`
    .coming-soon {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -72px; /* Compensate for header height */
    }
    
    h1 {
      font-size: 3rem;
      color: #1e88e5;
      text-align: center;
    }
  `]
})
export class OurStoryComponent {}
