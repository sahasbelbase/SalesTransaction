import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formObject: any = {
    userEmail: '',
    userPassword: '',
  };

  constructor(
    public router: Router,
    public registerService: RegisterService
  ) {}

  ngOnInit(): void {}

  login() {

    console.log(this.formObject);
    this.registerService.getUserPerson(this.formObject).subscribe(
      res => {
        console.log(res);

        localStorage.setItem('user',  JSON.stringify(res));
        this.router.navigate(['navigation/customer'])
      }
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['navigation', 'login']);
  }
}
