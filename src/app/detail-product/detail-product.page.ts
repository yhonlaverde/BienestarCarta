import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Producto} from 'src/Modelos/Producto'
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {
  @Input() Categoria;
  @Input() Producto;
  public strColorEmpresa: string;
  public strEstiloBoton: string;
  public strEstiloCuadro: string;
  public IdCategoria: number;
  public nombreCategoria: string;
  puntos: string;
  nombreProducto: string;
  imagenProducto: any;
  detalleProducto: any;
  productoLimite: boolean;
  cantidad:number = 1;
  constructor( private modalCtrl: ModalController, private Servicio: DataServiceService) { }

  ngOnInit() {
    console.log(this.Producto)
    console.log( this.Categoria)

    this.nombreCategoria =  this.Categoria.strCategoria;
    this.strEstiloBoton =  this.Categoria.strEstiloBoton;
    this.strEstiloCuadro = `#${ this.Categoria.strEstiloCuadro}`;

    this.puntos = this.Producto.intNroPuntosReq;
    this.nombreProducto = this.Producto.strDescripcion;
    this.imagenProducto = this.Producto.strImagenProducto64;
    this.detalleProducto = this.Producto.strDetalle;
    this.productoLimite = this.Producto.logIlimitado;
  }

  bajarCantidad(product){
    this.Servicio.bajarCantidadProducto(product);
  }

  aunmentarCantidad(product){
    this.Servicio.agregarProducto(product);
  }

  Salir(){
    this.modalCtrl.dismiss();
  }
}
