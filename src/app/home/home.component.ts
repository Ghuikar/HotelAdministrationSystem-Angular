import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../feature/login/login.component';
import { SignUpComponent } from '../feature/sign-up/sign-up.component';
import { ForgetPasswordsComponent } from '../feature/forget-passwords/forget-passwords.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog) {
    console.log("home loaded")
  }

  ngOnInit(): void {}

  signup() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '550px', // Optional: Set dialog width
      // disableClose: true, // Optional: Prevent closing by clicking outside or pressing Escape
    });
  }

  login(){
    // import('../feature/feature.module').then(m => {
      // console.log("m",m.FeatureModule)
      const dialogRef = this.dialog.open(LoginComponent  , {
        width: '550px',
      });
    // });

  }


  forgetPassword() {
    const dialogRef = this.dialog.open(ForgetPasswordsComponent  , {
      width: '550px',
    });
    // this.dialog.open(ForgetPasswordComponent, {
    //   width: '550px',
    // });
  }

}
