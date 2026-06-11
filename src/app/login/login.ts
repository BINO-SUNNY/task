import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup ,Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    loginForm!: FormGroup; 

  constructor(private fb:FormBuilder, private router:Router){}



  ngOnInit(): void {
  this.loginForm = this.fb.group({
    email:['', [Validators.required,Validators.email]],
    password:['',[ Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).+$')]]
  });
}






     login(): void {

    if (this.loginForm.valid) {

      
      alert('Login Success');

      this.router.navigateByUrl('Home');

    } else {

      
      alert('Please enter valid details');
    }
  }
}
