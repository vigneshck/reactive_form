import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regdata: FormGroup
  countries: string[] = ['USA', 'UK', 'Canada', 'India'];

  constructor(private Fbuilder: FormBuilder) { }

  ngOnInit() {

    this.regdata = this.Fbuilder.group({
      fname: ['', [Validators.required, Validators.minLength(5)]],
      lname: [''],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      cpassword: ['', [Validators.required]],
      country: ['', [Validators.required]],

      terms: ['', [Validators.required]],

    },
      {
        validator: this.passwordValidator
      }

    );


  }

  passwordValidator(input: AbstractControl) {

    const pwd = input.get('password');
    const cpwd = input.get('cpassword');

    


    if (pwd.pristine || cpwd.pristine)
    { return null;}
    
    if (pwd.value == cpwd.value)
    {
      return null;
    } 
    else
    {
      return { 'misMatch': true }; 
    }





  }







  data(regdata) {
    alert(JSON.stringify(regdata));
  }


}
