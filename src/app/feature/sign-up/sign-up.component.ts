import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private ngxService: NgxUiLoaderService,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<SignUpComponent>,
    private router: Router
  ) {  }

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
