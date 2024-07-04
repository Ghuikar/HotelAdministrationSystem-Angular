import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  signup() {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '550px', // Optional: Set dialog width
      // disableClose: true, // Optional: Prevent closing by clicking outside or pressing Escape
    });
  }
  

  forgetPassword() {
    this.dialog.open(ForgetPasswordComponent, {
      width: '550px',
    });
  }
}
