import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataServiceService } from "../../data-service.service";
import { Producto } from 'src/Modelos/Producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carrito: Producto[] = [];
  numCarrito: any;

  constructor( private modalCtrl: ModalController, private Servicio: DataServiceService) { }

  ngOnInit() {
    this.carrito = this.Servicio.obtenerCarrito();
    this.numCarrito = this.carrito.length
    console.log(this.carrito);
  }

  bajarCantidad(product){
    this.Servicio.bajarCantidadProducto(product);
  }

  aunmentarCantidad(product){
    this.Servicio.agregarProducto(product);
  }

  removerCarritoItem(product){
    this.Servicio.eliminarproducto(product);
    this.carrito = this.Servicio.obtenerCarrito();
    this.numCarrito = this.carrito.length
  }

  Salir(){ 
    this.carrito = this.Servicio.obtenerCarrito();
    this.numCarrito = this.carrito.length

    this.modalCtrl.dismiss({
      item: this.numCarrito,
    });
  }

}
