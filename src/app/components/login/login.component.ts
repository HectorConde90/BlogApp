import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;


  constructor(private validacionLogin: LoginService, private ruta: Router) {



    this.login = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/),
        ]),


        password: new FormControl('', [
          Validators.required,
        ])
      }
    );


   }

  ngOnInit(): void {
  }

  async enviarDatos() {
    console.log(this.login.value);
    const token = await this.validacionLogin.enviarDatos(this.login.value);

    if (token['token'] === 'QpwL5tke4Pnpja7X4') {
       localStorage.setItem('loged', 'true');
       this.ruta.navigate(['main/home']);
    } 

  }

}
