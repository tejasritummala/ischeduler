import { Component, OnInit,Inject } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPwdForm;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
  private dialogRef: MatDialogRef<ForgotPasswordComponent>,private dialog: MatDialog,) {
    this.forgotPwdForm = new FormGroup({
      emailid: new FormControl('', [Validators.required, Validators.email])
    });
  }
  ngOnInit() {
  }
  getErrorMessage(controlName: string) {
    return this.forgotPwdForm.controls[controlName].hasError('required') ? 'You must enter a value' :
      this.forgotPwdForm.controls[controlName].hasError('email') ? 'Please enter valid email' : '';
  }
  onClose(){
    if(this.forgotPwdForm.valid){
      this.dialogRef.close();
    }
    }
 
}
