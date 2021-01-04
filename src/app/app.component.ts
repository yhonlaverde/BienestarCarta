import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { DataServiceService } from "./data-service.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Inicio",
      // url: '/folder',
      icon: "home",
    },
    {
      title: "Mis Puntos",
      children:[
        {
          icon: 'thumbs-up',
          title:  'Puntos'

          
        },
        {
          icon: 'happy',
          title: 'Puntos'
        },
        {
          icon: 'time',
          title: 'Puntos'
        },
        {
          icon: 'heart',
          title: 'Puntos'
        }
      ]
      // url: '/folder/Outbox',
      //icon: "paper-plane",
    },
    {
      title: "Mis Compras",
      // url: '/folder/Favorites',
      icon: "heart",
    },
    {
      title: "mis Bonos",
      // url: '/folder/Archived',
      icon: "archive",
    },
    {
      title: "Promociones",
      url: "/folder/Trash",
      icon: "trash",
    }
  ];
  public intPuntosCaritas: any;
  public intPuntosBombillo: any;
  public intPuntosCorazones: any;
  public intPuntosKilo: any;

  public labels = ['Perfil', 'Salir'];
  public idEmpleado: string = "";
  public nombreEmpleado: string;

  users: any[];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private service: DataServiceService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.initializeApp();
    console.log(this.activatedRoute.snapshot.paramMap.get("id"));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    
  console.log(this.appPages);
    
    const path = window.location.pathname.split("folder/")[0];
    console.log(path);
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
    //La idea inicial es cuando el usuario este autentificado se consuma este servicio antes de entrar al inicio de la pagina 1020463917
     
  }


  cargarEmpleado(Empleado){
//    this.idEmpleado = id;
  console.log(Empleado.intPuntosCaritas)
//     // this.service
//     //   .ObtenerIngformacionEmpleado(this.idEmpleado)
//     //   .subscribe((users) => {
//     //     this.users = users;
//     //     console.log("/", this.users);
         this.nombreEmpleado = Empleado.strNombre;
         this.intPuntosCaritas = Empleado.intPuntosCaritas;
          this.intPuntosBombillo = Empleado.intPuntosBombillo;
          this.intPuntosCorazones = Empleado.intPuntosCorazones;
          this.intPuntosKilo = Empleado.intPuntosKilo;
    //   });
  }
}
