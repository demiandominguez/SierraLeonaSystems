import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario/usuario.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  resultadoLogIn = false;

  constructor() { }

  ngOnInit() {
  }

  loggear(){
    this.resultadoLogIn = this.usuario.ingresar()
  }

}
