import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private ngxService: NgxUiLoaderService,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<ForgetPasswordComponent>
  ) {}

  forgetPasswordForm!: FormGroup;

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  handleSubmit() {
    this.ngxService.start();
    const payload = this.forgetPasswordForm.value;
    this.userService.forgetPassword(payload, '/user/forget-password').subscribe(
      (res) => {
        this.ngxService.stop();
        this.dialogRef.close();
        this.snackbarService.openSnackBar(res.message, '');

        console.log('res', res);
      }),
      (err: any) => {
        console.log('reer', err);
        this.ngxService.stop();
        this.snackbarService.openSnackBar(err.error, '');
      };
  }

  close() {
    console.log('Close');
    this.dialogRef.close();
  }
}
