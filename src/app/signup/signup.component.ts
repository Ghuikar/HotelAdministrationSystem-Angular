import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from '../services/user.service';
import { SnackbarService } from '../services/snackbar.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private ngxService: NgxUiLoaderService,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<SignupComponent>,
    private router: Router
  ) {}

  signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactnumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  handleSubmit() {
    this.ngxService.start();
    const formData = this.signupForm.value;

    const data = {
      name: formData.name,
      email: formData.email,
      contactnumber: formData.contactnumber,
      password: formData.password,
    };

    this.userService.signup(data, '/user/signup').subscribe(
      (res: any) => {
        this.ngxService.stop();
        this.dialogRef.close();
        this.snackbarService.openSnackBar(res?.message, '');
        this.router.navigate(['/']);
      },
      (err) => {
        this.ngxService.stop();
        this.snackbarService.openSnackBar(err.error?.message, '');
      },
      () => {
        this.ngxService.stop();
      }
    );
  }
  close() {
    this.dialogRef.close();
  }
}
