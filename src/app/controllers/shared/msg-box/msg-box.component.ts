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
  userName: string = '';
  quoteSent: boolean = false;
  showNameError = false;
  nameErrorMessage = '';

  onClose() {
    this.mobileNumber = '';
    this.userName = '';
    this.quoteSent = false;
    this.close.emit();
  }

  isValidMobile(): boolean {
    return /^[0-9]{10}$/.test(this.mobileNumber);
  }

  onNameChange() {
    const name = this.userName.trim();
    if (name.length === 0) {
      this.showNameError = false;
      return;
    }
    if (name.length < 3) {
      this.showNameError = true;
      this.nameErrorMessage = 'Name must be at least 3 characters long';
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      this.showNameError = true;
      this.nameErrorMessage = 'Name should contain only letters';
      return;
    }
    this.showNameError = false;
  }

  isNameValid(): boolean {
    const name = this.userName.trim();
    return name.length >= 3 && /^[a-zA-Z\s]+$/.test(name);
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
