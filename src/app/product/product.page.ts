import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataServiceService } from "../data-service.service";
import { LoadingController } from "@ionic/angular";
import { AppComponent } from "../app.component";
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { DetailProductPage } from "../detail-product/detail-product.page";
import { CarritoPage } from "../page/carrito/carrito.page";
import { Empleado } from 'src/Modelos/Empleado';
import { Producto } from "src/Modelos/Producto";
import { IonInfiniteScroll } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: "app-product",
  templateUrl: "./product.page.html",
  styleUrls: ["./product.page.scss"],
})
export class ProductPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public folder: string;
  public idEmpleado: string = "";
  public nombreEmpleado: string;
  public srtLogoEmpresa: string;
  public srtNombreEmpresa: string;
  public loading: any;
  public strColorEmpresa: string;
  public strEstiloBoton: string;
  public strEstiloCuadro: string;
  public IdCategoria: number;
  public nombreCategoria: string;
  term = "";

  users: any[];
  loginuser:  Empleado[] = [];
  categorias: any[];
  productos: any[];
  itemsProduct: any[];
  carrito: Producto[] = [];
  numCarrito: any;

  categorialist: any[];
  slideOpts = {
    initialSlide: 1,
    speed: 200,
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DataServiceService,
    public loadingController: LoadingController,
    private appcom: AppComponent,
    private router: Router,
    public modalController: ModalController,
    public toastController: ToastController,
    private storage: Storage
  ) {
    console.log(this.activatedRoute.snapshot.paramMap.get("id"));
    // this.carrito = this.service.obtenerCarrito();
    // console.log(this.carrito.length);
  }

  async ngOnInit() {
    this.itemsProduct = await this.initializeItems();
    this.cargarinicio();
    this.carrito = this.service.obtenerCarrito();
    this.numCarrito = this.carrito.length

    
 
  }

  regresar(){
    this.storage.get('IdEmpleado').then((val) => {
      console.log('Your age is', val);
      this.router.navigate(['folder', val]);
    });
  }

  async initializeItems(): Promise<any> {
    this.presentLoading("Espera...");
    this.IdCategoria = parseInt(
      this.activatedRoute.snapshot.paramMap.get("id")
    );
    this.service
      .ObtenerIngformacionProducto(this.IdCategoria)
      .subscribe((dataPro) => {
        this.loading.dismiss();
        this.productos = dataPro["productos"];
        this.categorialist = dataPro["categoria"];
        console.log(dataPro["productos"]);
        this.nombreCategoria = dataPro["categoria"].strCategoria;
        this.strEstiloBoton = dataPro["categoria"].strEstiloBoton;
        this.strEstiloCuadro = `#${dataPro["categoria"].strEstiloCuadro}`;

        this.itemsProduct = this.productos;
      });
  }

  async cargarinicio() : Promise<any> {
    this.storage.get('IdEmpleado').then((val) => {
    console.log('Your age is', val);
    this.idEmpleado = val;
      
    this.service
      .ObtenerIngformacionEmpleado(this.idEmpleado)
      .subscribe((users) => {
        this.loading.dismiss();
        if (users != undefined) {
          this.users = users;
          console.log("/", this.users);
          this.appcom.cargarEmpleado(users['empleado']);
          this.nombreEmpleado = this.users["empleado"].strNombre;
          this.srtLogoEmpresa = this.users["empleado"][
            "tblBFEmpresa"
          ].strLogo64;
          this.srtNombreEmpresa = this.users["empleado"][
            "tblBFEmpresa"
          ].strNombreEmpresa;
          // this.strColorEmpresa = this.users["empleado"][
          //   "tblBFEmpresa"
          // ].strColorEmpresa;

          this.strColorEmpresa = `#${this.users["empleado"]["tblBFEmpresa"].strColorEmpresa}`;
          this.categorias = [];
          if (this.users["categorias"]) {
            let inicio = 0;

            for (const i of Object["values"](users["categorias"])) {
              console.log(i);
              i["strEstiloCuadro"] = `#${i["strEstiloCuadro"]}`;
              i[
                "strImagenCategoria"
              ] = `../../assets/${i["strImagenCategoria"]}`;
              this.categorias.push(i);
            }
          }
          
        }
      });
    });
  }

  cargarCarrito(){
    
  }

  agregarAlCarro(product){
    product.cantidad = 1;
    product.nombreCategoria = this.nombreCategoria;
    this.presentToast();
    this.service.agregarProducto(product);
    this.carrito = this.service.obtenerCarrito();
    this.numCarrito = this.carrito.length;

  }

  async filterList(evt) {
    this.itemsProduct = this.productos;
    let searchTerm = evt.target.value;
    console.log(searchTerm);
    if (!searchTerm) {
      return;
    }
    if (searchTerm && searchTerm.trim() != "") {
      this.itemsProduct = this.itemsProduct.filter((item) => {
        return (
          item.strDescripcion.toLowerCase().indexOf(searchTerm.toLowerCase()) >
          -1
        );
      });
    }
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message,
    });
    return this.loading.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Añadio Sastifactoriamente.',
      duration: 2000
    });
    toast.present();
  }


  async abrirModal(dato) {
    const modal = await this.modalController.create({
      component: DetailProductPage,
      componentProps:{
          Categoria: this.categorialist,
          Producto: dato
      },
      cssClass: 'my-custom-class'
    });
    return await modal.present();
     
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.itemsProduct.length == 1000) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
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
