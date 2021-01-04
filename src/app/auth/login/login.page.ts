import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { DataServiceService } from "../../data-service.service";
import { LoadingController } from "@ionic/angular";
import { AppComponent } from '../../app.component';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public emailuser: string = "";
  public contrasena: string = "";
  public nombreEmpleado: string;
  public loading: any;
  public alert: any;
  public idEmpleado: string = "";
  credentials: FormGroup;


  users: any[];

  constructor(private fb: FormBuilder,public alertController: AlertController, private  router:  Router, private service: DataServiceService, public loadingController: LoadingController, private appcom: AppComponent) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      text: [[Validators.required, Validators.minLength(10)]],
      password: [[Validators.required, Validators.minLength(10)]],
    });
  }

  // login(){
  //   this.presentLoading("Espera...");
    
     
  //     this.emailuser = this.credentials.value.email;
  //     this.contrasena = this.credentials.value.password;
  //     // this.router.navigate(['folder', this.idEmpleado]);
  //     this.service.loginUser(this.emailuser, this.contrasena).subscribe((res)=>{
  //       console.log(res["empleado"])
  //       if(res["empleado"] === null){
  //         this.loading.dismiss();
  //         this.presentAlert();
  //       } else{
  //         this.loading.dismiss();
  //         this.nombreEmpleado = res['empleado'].strNombre;
  //         this.idEmpleado = res['empleado'].IdEmpleado;
  //         this.appcom.cargarEmpleado(this.nombreEmpleado);
  //         this.router.navigate(['folder', this.idEmpleado]);
          
  //       }
  //       // this.router.navigateByUrl('folder'+(this.idEmpleado));
  //     });
    
  // }

  async login() {
    console.log(this.credentials.value)
    const loading = await this.loadingController.create();
    await loading.present();
    
    this.service.loginUser(this.credentials.value).subscribe(

      async (res) => {
         console.log(res)
        
        if(res["empleado"] === null){
          await loading.dismiss();
          this.presentAlert();
        } else{
          await loading.dismiss();
          this.nombreEmpleado = res['empleado'].strNombre;
          this.idEmpleado = res['empleado'].IdEmpleado;
          this.appcom.cargarEmpleado(res['empleado']);
          this.router.navigate(['folder', this.idEmpleado]);
          
        }
      }
    );
  }

  get text() {
    return this.credentials.get('text');
  }
  
  get password() {
    return this.credentials.get('password');
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message,
    });
    return this.loading.present();
  }

  async presentAlert() {
    this.alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Alert',
       subHeader: 'Intentalo de nuevo',
      message: 'Usuario o contraseña incorrecta',
      buttons: ['OK']
    });

    return this.alert.present();
  }
}
