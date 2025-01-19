import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-msg-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './msg-box.component.html',
  styleUrls: ['./msg-box.component.css']
})
export class MsgBoxComponent {
  @Input() show: boolean = false;
  @Input() projectName: string = '';
  @Input() plotNumber: number | null = null;
  @Output() close = new EventEmitter<void>();
  
  mobileNumber: string = '';
  quoteSent: boolean = false;

  onClose() {
    this.mobileNumber = '';
    this.quoteSent = false;
    this.close.emit();
  }

  isValidMobile(): boolean {
    return /^[0-9]{10}$/.test(this.mobileNumber);
  }

  getQuote() {
    if (this.isValidMobile()) {
      this.quoteSent = true;
      
      // Close the modal after a delay
      setTimeout(() => {
        this.onClose();
      }, 3000);
    }
  }
}
