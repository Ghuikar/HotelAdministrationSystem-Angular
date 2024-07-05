import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forget-passwords',
  templateUrl: './forget-passwords.component.html',
  styleUrls: ['./forget-passwords.component.scss']
})
export class ForgetPasswordsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private ngxService: NgxUiLoaderService,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<ForgetPasswordsComponent>
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
      (res:any) => {
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
