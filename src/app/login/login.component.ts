import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  logingSuccess = false;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get username(): any {
    return this.formGroup.get('username');
  }

  get password(): any {
    return this.formGroup.get('password');
  }

  login(): any {
    console.log(`Username: ${this.username.value} Password: ${this.password.value}`);
    this.loginService.login(this.formGroup.value).subscribe(result => {
      console.log('loging result: ' + result);
      if (result != null) {
        console.log(result.username);
        this.logingSuccess = true;
        this.router.navigate(['/home']);
      }
    });
  }
}
