import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Signup } from './signup.model';
import { Router } from '@angular/router';
import { ValidatorsService } from '../HelperServices/validators.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMessage: string;
  signupForm: any;
  mismatch = false;
  capchastr;
  checkbox = false;
  public captchaResponse: string = '';
  public resolved(captchaResponse: string) {
    debugger;
    const newResponse = captchaResponse
      ? `${captchaResponse.substr(0, 7)}...${captchaResponse.substr(-7)}`
      : captchaResponse;
    this.captchaResponse += `${JSON.stringify(newResponse)}\n`;
    console.log(this.captchaResponse);
    if(this.captchaResponse != '' || null){
      this.onSubmit();
    }
  }
  constructor(private fb: FormBuilder, private router: Router, private validatorsService: ValidatorsService) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', this.validatorsService.emailValidator],
      phone: ['', this.validatorsService.phoneNumberValidator],
      password: ['', this.validatorsService.passwordValidator],
      confirmPassword: [''],
      companyName: ['', Validators.required],
      country: ['', Validators.required],
      webUrl: ['', this.validatorsService.urlValidator],
      checkbox:['']
    }, { validator: this.validatorsService.passwordMatchValidator },
    );
  }

  /* Function to receive signup form values*/

  onSubmit() {
    if (this.signupForm.valid) {
      if(this.signupForm.controls.checkbox.value === true){
        console.log("valid", this.signupForm.value);
        var obj = new Signup(this.signupForm.value);
        console.log(obj);
        this.router.navigateByUrl("/home");
      }else{
       this.checkbox = true;
      }
    }
  }
  checkboxFn(){
    if(this.signupForm.controls.checkbox.value === true){
      this.checkbox = false;
    }else{
      this.checkbox = true;
    }
  }
  getErrorMessage(controlName: string) {
      return this.signupForm.controls[controlName].hasError('invalidEmailAddress') ? 'Invalid email address' :
      this.signupForm.controls[controlName].hasError('invalidNumber') ? 'Not a valid phone number' :
        this.signupForm.controls[controlName].hasError('invalidUrl') ? 'Invalid Url' :
          this.signupForm.controls[controlName].hasError('required') ? 'You must enter a value' :
            this.signupForm.controls[controlName].hasError('invalidPassword') ? 'Invalid password. Password must contain a number' : '';
  }

  ngOnInit() {

  }
 
}
