import { Component, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Empleado } from "src/Modelos/Empleado";
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { UsuarioLogin } from 'src/Modelos/Usuario';
import { Producto } from 'src/Modelos/Producto';
import {Evento} from 'src/Modelos/Evento';

const { Storage } = Plugins;
 
const TOKEN_KEY = 'my-token';
@Injectable()
export class DataServiceService {
  private carrito = [];
  private users = [];
  private carritoNumeroItems = new BehaviorSubject(0);
  private userLogueado = new BehaviorSubject(0);


  credentials:UsuarioLogin;
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';
  //  strUrl = "http://reciclapi.miconexion.es:20296/webapi/api";
  strUrl = "https://localhost:44379/api/"; //URL DE PRUEBAS
  urlpost ="https://localhost:44379/"
   // strUsuario = "admin";
  // strContrasena = ".Merlos2020";
  strCorreo: string;
  strContrasena: string;

  httpHeader = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     this.log(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   };
  // }
  // private log(message: string) {
  //   //console.log(message);
  // }

  constructor(private http: HttpClient) {
    this.loadToken();
  }

  obtenerCarrito(){
    return this.carrito;
  }

  obtenerCarritoNumeroItems(){
    return this.carritoNumeroItems;
  }

  obtenerUser(){
    return this.users;
  }

  bajarCantidadProducto(products){
    for (let [index, p] of this.carrito.entries()) {
      if (p.IdProducto === products.IdProducto) {
        p.cantidad -= 1; if (p.cantidad == 0){
          this.carrito.splice(index,1)
        }
      }
    }

    this.carritoNumeroItems.next(this.carritoNumeroItems.value-1);
  }

  eliminarproducto(products){
    for (let [index,p] of this.carrito.entries()) {
      if (p.IdProducto === products.IdProducto) {
        this.carritoNumeroItems.next(this.carritoNumeroItems.value - p.cantidad);
        this.carrito.splice(index, 1);
        
      }
      
    }
  }

  agregarProducto(producto){
    console.log(producto)
    let agregado = false;
    for (let p of this.carrito) {
      if (p.IdProducto === producto.IdProducto) {
        p.cantidad +=1;
        agregado = true;
        break;
      }      
    }
    if (!agregado) {
      this.carrito.push(producto);
    }

    this.carritoNumeroItems.next(this.carritoNumeroItems.value +1);
  }

  loginUsers(user){
    console.log(user)
    let Login = false;
    for (let p of this.users) {
      if (p.IdEmpleado === user.IdEmpleado) {
        p.cantidad +=1;
        Login = true;
        break;
      }      
    }
    if (!Login) {
      this.users.push(user);
    }

    this.userLogueado.next(this.userLogueado.value +1);
  }

  async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });    
    if (token && token.value) {
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  // loginUser(credentials: UsuarioLogin): Observable<any> {

  //   return this.http.post<Empleado>(this.urlpost+ 'authenticate',  JSON.stringify(credentials), this.httpHeader).pipe(
  //     map((data: any) => data.token),
  //     switchMap(token => {
  //       return from(Storage.set({key: TOKEN_KEY, value: token}));
  //     }),
  //     tap(_ => {
  //       this.isAuthenticated.next(true);
  //     })
  //   )
  // }

  loginUser(credentials: UsuarioLogin): Observable<Empleado> {
    console.log(credentials);
    return this.http.post<Empleado>(this.urlpost + 'authenticate', JSON.stringify(credentials), this.httpHeader)
    
    .pipe(
      // catchError(this.handleError('Autenticación fallida'))
          tap(_ => {
            console.log(_)
        this.isAuthenticated.next(true);
      })
    );
  }



  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    return Storage.remove({key: TOKEN_KEY});
  }


  // loginUser(credentials){
  //   this.strCorreo = credentials.email;
  //   console.log(this.strCorreo)
  //   this.strContrasena = credentials.password;
  //   return this.http.get<Empleado>(this.strUrl + "Getautentificacion?strCorreo="+  this.strCorreo + "&strContrasena="+this.strContrasena);
  // }

  // GetInfoClientFP(Id:number, strTok:string) {
  //   return this.http.get<Usuarios>(this.apiUrl + "GetInfoClientFP?Id="+Id+"&strTok="+strTok);
  //   }

  

  ObtenerIngformacionEmpleado(IdEmpleado: string) {
    return this.http.get<Empleado[]>(this.strUrl + 'GetInfoEmpleado/' + IdEmpleado);
  }
  //Productos
  ObtenerIngformacionProducto(IdCategoria: number) {
    return this.http.get<Producto[]>(this.strUrl + 'GetProductoByCategoria/' + IdCategoria);
  }

  //Eventos 
  obtenerInformacionEvento(idEmpresa: number){
    return this.http.get<Evento[]>(this.strUrl + 'GetInfoEvento/' + idEmpresa)
  }
}
