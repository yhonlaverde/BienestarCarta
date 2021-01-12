import { Component, Injectable, OnInit } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import { DataServiceService } from "../data-service.service";
import { LoadingController } from "@ionic/angular";
import { AppComponent } from '../app.component';
// import { ProductPage } from "../product/product.page";
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { DetailProductPage } from "../detail-product/detail-product.page";
import { CarritoPage } from "../page/carrito/carrito.page";
import { Producto } from "src/Modelos/Producto";
import { Storage } from '@ionic/storage';



@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"],
})
@Injectable()
export class FolderPage implements OnInit {
  public folder: string;
  public idEmpleado: string = "";
  public idEmpresa: string = "";
  public nombreEmpleado: string;
  public srtLogoEmpresa: string;
  public srtNombreEmpresa: string;
  public loading: any;
  public strColorEmpresa: string;
  public strEstiloBoton: string;

  users: any[];
  categorias: any[];
  empleado: any[];
  numCarrito: any;
  carrito: Producto[] = [];

  slideOpts = {
    initialSlide: 1,
    speed: 200
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DataServiceService,
    public loadingController: LoadingController,
    private appcom: AppComponent,
    // private appproduc: ProductPage,
    private router:Router,
    public modalController: ModalController,
    public toastController: ToastController ,
    private storage: Storage
  ) {
    console.log(this.activatedRoute.snapshot.paramMap.get("id"));
    this.presentLoading("Espera...");
  }

  ngOnInit() {
    
    this.carrito = this.service.obtenerCarrito();
    this.numCarrito = this.carrito.length
    this.folder = "Empleado"; 
    this.idEmpleado = this.activatedRoute.snapshot.paramMap.get("id");
    this.storage.set('IdEmpleado', this.idEmpleado);
    

    this.service
      .ObtenerIngformacionEmpleado(this.idEmpleado)
      .subscribe((users) => {
        if (users != undefined) {
          this.loading.dismiss();
          this.users = users;
          console.log("/", this.users);
          this.empleado = this.users["empleado"];
          this.nombreEmpleado = this.users["empleado"].strNombre;
          this.idEmpresa = this.users["empleado"].IdEmpresa;
          console.log(this.idEmpresa)
          this.storage.set('IdEmpresa', this.idEmpresa);
          this.srtLogoEmpresa = this.users["empleado"][
            "tblBFEmpresa"
          ].strLogo64;
          this.srtNombreEmpresa = this.users["empleado"][
            "tblBFEmpresa"
          ].strNombreEmpresa;
          // this.strColorEmpresa = this.users["empleado"][
          //   "tblBFEmpresa"
          // ].strColorEmpresa;

          this.strColorEmpresa = `#${
            this.users["empleado"][
              "tblBFEmpresa"
            ].strColorEmpresa
            }`;
            this.categorias = [];
            if ( this.users[
              "categorias"
            ]) {
              let inicio = 0;

              for (const i of Object['values'](users['categorias'])) { 
                 console.log(i);
                i['strEstiloCuadro'] = `#${
                  i['strEstiloCuadro']
                  }`;
                  i['strImagenCategoria'] = `../../assets/${
                    i['strImagenCategoria']
                    }`;
                this.categorias.push(i);
              }
            }
            // this.strEstiloBoton = `#${
            //   this.users["empleado"][
            //     "categorias"
            //   ].strEstiloBoton
            //   }`;

            // this.strEstiloBoton = this.users["empleado"][
          //   "tblBFEmpresa"
          // ].strEstiloBoton;

        }
      });
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message,
    });
    return this.loading.present();
  }

  irEvento(){
      this.appcom.cargarEmpleado(this.users['empleado']);
      this.router.navigate(['eventos-internos']);
  }

  producto(categoria){
    console.log(categoria)
    // this.appcom.cargarEmpleado(this.nombreEmpleado);
    this.service.loginUsers(this.empleado);
    // this.appproduc.cargarinicio(this.activatedRoute.snapshot.paramMap.get("id"))
    this.router.navigate(['product',categoria.IdCategoria]);
  }

  async verCarrito(){
    const modal = await this.modalController.create({
      component: CarritoPage,
      componentProps:{
          Categoria: 'Detalle',
      },
      cssClass: 'my-custom-class'
    });
     await modal.present();
    const {data} = await modal.onDidDismiss();
    console.log(data)
     this.numCarrito = data.item;
  }
}
