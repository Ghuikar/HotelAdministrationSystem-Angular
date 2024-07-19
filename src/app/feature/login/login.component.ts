import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private ngxService: NgxUiLoaderService,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<SignUpComponent>,
    private router: Router
  ) {}

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  handleSubmit() {
    this.ngxService.start();

    const payload = this.loginForm.value;
    this.userService.login(payload, '/user/login').subscribe(
      (res) => {
      this.ngxService.stop();
      this.dialogRef.close();
      this.snackbarService.openSnackBar(res?.message, '');
      // this.router.navigate(['/']);
      const token = res.token;
      localStorage.setItem('authToken', token);
    },
    (err: any) => {
      console.log('Login failed:', err);
      this.ngxService.stop();
      this.snackbarService.openSnackBar(err.error.message, '');


      // Handle the error, e.g., show an error message to the user
    })

  }

  close() {}
}
