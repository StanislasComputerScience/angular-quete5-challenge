import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../model/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = new User('', '', '', '');

  onSubmit() {
    console.log('Form submitted!');
    console.log(`Email: ${this.user.email}`);
    console.log(`First Name: ${this.user.firstName}`);
    console.log(`Last Name: ${this.user.lastName}`);
    console.log(`Password: ${this.user.password}`);
  }
}
