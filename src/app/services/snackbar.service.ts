import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}



  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.duration = 4000; // Duration in milliseconds (4 seconds)
    config.horizontalPosition = 'center'; // Optional: center the snackbar horizontally
    config.verticalPosition = 'top'; // Display snackbar at the top

    if (action === 'error') {
      config.panelClass = ['black-snackbar']; // Apply custom CSS for error snackbar
    } else {
      config.panelClass = ['green-snackbar']; // Apply custom CSS for other snackbars
    }

    this.snackbar.open(message, '', config);
  }
}
