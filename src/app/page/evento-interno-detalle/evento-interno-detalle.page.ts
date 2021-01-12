import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';


@Component({
  selector: 'app-evento-interno-detalle',
  templateUrl: './evento-interno-detalle.page.html',
  styleUrls: ['./evento-interno-detalle.page.scss'],
})
export class EventoInternoDetallePage implements OnInit {
  
  @Input() Evento;
  returnpath: string = "";
  constructor(private modalCtrl: ModalController, public filePath: FilePath, public fileChooser: FileChooser) { }

  ngOnInit( ) {
    console.log(this.Evento)
  }

  pickFile(){
    this.fileChooser.open().then((fileuri)=>{
      this.filePath.resolveNativePath(fileuri).then((resolvenativepatch)=>{
        this.returnpath = resolvenativepatch;
      })
    })
  }

  Salir(){
    this.modalCtrl.dismiss();
  }

}
