import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logado: boolean;

  constructor() {

  }

  ngOnInit(){

    this.logado = localStorage.getItem('loged') === 'true' ? true : false;

    // this.comprobarLogado();

  }


  // comprobarLogado() {



  // }

  logout() {
    localStorage.removeItem('loged');
  }

}
