import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/Services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  [x: string]: any;

  registrationForm: FormGroup;
  user:User;
  userSubmitted: boolean;
  constructor(private fb :FormBuilder, 
              private userservice: UserServiceService,
              private alertify:AlertifyService) { }

  ngOnInit() {
    // his.registrationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required,Validators.email]),
    //   password: new FormControl(null, [Validators.required,Validators.minLength(8)]),
    //   confirmpassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)])
    // }, this.passwordMatchingValidator);
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName: [null,Validators.required ],
      email: [null,[Validators.required,Validators.email] ],
      password: [null,[Validators.required,Validators.minLength(8)] ],
      confirmpassword: [null,Validators.required ],
      mobile: [null,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]*$') ] ]
    }, {Validators: this.passwordMatchingValidator})
  }
  //Getter methods for all form controls
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmpassword(){
    return this.registrationForm.get('confirmpassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  passwordMatchingValidator(fc:AbstractControl): ValidationErrors | null{
    return fc.get('password')?.value === fc.get('confirmpassword')?.value ? null:
    {notmatched: true}
  }

  onSubmit(){
    console.log(this.registrationForm);
    console.log('user_info',this.user);
    console.log('notmched',this.passwordMatchingValidator);
    this.userSubmitted = true;

    if(this.registrationForm.valid)
      {
        // this.user= Object.assign(this.user, this.registrationForm.value);
        this.userservice.addUser(this.userData());
        this.registrationForm.reset();
        this.userSubmitted= false;
        this.alertify.success("Congrats, you are successfully registered.")
      }
      else 
      {
        this.alertify.error("Kindly provide the required fields.");
      }
    }
  userData(): User{
    return this.user={
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }

  }


  

}
