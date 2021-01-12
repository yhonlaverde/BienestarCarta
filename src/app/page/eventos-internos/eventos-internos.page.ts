import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController, ModalController } from "@ionic/angular";
import { DataServiceService } from 'src/app/data-service.service';
import { EventoInternoDetallePage } from '../evento-interno-detalle/evento-interno-detalle.page';



@Component({
  selector: 'app-eventos-internos',
  templateUrl: './eventos-internos.page.html',
  styleUrls: ['./eventos-internos.page.scss'],
})
export class EventosInternosPage implements OnInit {

  public idEmpleado: string = "";
  public idEmpresa: number;
  public nombreEmpleado: string;
  public srtLogoEmpresa: string;
  public srtNombreEmpresa: string;
  public loading: any;
  public strColorEmpresa: string;
  public strEstiloBoton: string;
  public strEstiloCuadro: string;
  eventos: any[];
  verImagen: boolean = false;

  constructor(
    private service: DataServiceService,
    private storage: Storage, 
    public loadingController: LoadingController,
    public modalController: ModalController,
     ) { }

  ngOnInit() {
    this.storage.get('IdEmpresa').then((val) => {
      console.log('is', val);
      this.idEmpresa = val;
      this.presentLoading("Espera...");
      this.service.obtenerInformacionEvento(this.idEmpresa).subscribe((data)=>{
        this.loading.dismiss();

        if (data) {
           data.forEach(element => {
             let validarimg;
             validarimg = element.strRutaEvento.substr(0,8)
             console.log(validarimg)
             if (validarimg != 'Eventos/') {
                this.verImagen = true;
             }
           });
        }
        this.eventos = data;
        console.log(data)
      })
    });


    


  }

  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message,
    });
    return this.loading.present();
  }

  async abrirDetalle(dato) {
    const modal = await this.modalController.create({
      component: EventoInternoDetallePage,
      componentProps:{
          Evento: dato
      },
      cssClass: 'my-custom-class'
    });
    return await modal.present();
     
  }

}
