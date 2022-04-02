import { Component, OnInit } from '@angular/core';
import { AuthService } from '../ngservices/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent implements OnInit {
  form: any = {
    name: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  

  constructor(private authService: AuthService) { 
    
    }

  ngOnInit(): void {
  }

  onSubmit(): void {
    debugger;
    const { username, email, password, address } = this.form;

    this.authService.register(username, email, password, address).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}
