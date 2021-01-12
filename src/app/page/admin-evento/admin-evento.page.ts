import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-evento',
  templateUrl: './admin-evento.page.html',
  styleUrls: ['./admin-evento.page.scss'],
})
export class AdminEventoPage implements OnInit {
  public idEmpleado: string = "";
  public nombreEmpleado: string;
  public srtLogoEmpresa: string;
  public srtNombreEmpresa: string;
  public loading: any;
  public strColorEmpresa: string;
  public strEstiloBoton: string;
  public strEstiloCuadro: string;
  constructor() { }

  ngOnInit() {
  }

  evento(){
    console.log('evento');
  }

  noticia(){
    console.log('noticia')
  }

}
