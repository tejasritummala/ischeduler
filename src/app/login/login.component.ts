import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Login } from './login.model';
import { Router } from '@angular/router';
import { ValidatorsService } from '../HelperServices/validators.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(private validatorsService: ValidatorsService, public dialog: MatDialog, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, this.validatorsService.emailValidator]),
      password: new FormControl('', [Validators.required, this.validatorsService.passwordValidator])
    });
  }
  ngOnInit() {
  }
  forgotPwdMethod(): void {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '350px',
      data: { name: 'test' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onSubmitLogin() {
    debugger;
    if (this.loginForm.valid) {
      console.log("valid", this.loginForm.value);
      var obj = new Login(this.loginForm.value);
      console.log(obj);
      this.router.navigateByUrl("/home");
    }
  }
  getErrorMessage(controlName: string) {
    return this.loginForm.controls[controlName].hasError('required') ? 'You must enter a value' :
      this.loginForm.controls[controlName].hasError('invalidEmailAddress') ? 'Invalid email address' :
        this.loginForm.controls[controlName].hasError('invalidPassword') ? 'Invalid password. Password must contain a number' : '';;
  }
}
