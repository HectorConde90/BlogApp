import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlLogin: string;

  constructor(private http: HttpClient) {
    this.urlLogin = 'https://reqres.in/api/login';
   }


  enviarDatos(pUser) {
    // console.log(pUser);
    return this.http.post<any[]>(this.urlLogin, pUser).toPromise();


  }
}
