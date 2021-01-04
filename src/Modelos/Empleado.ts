export interface Empleado {
  IdEmpleado: string;
  strNombre: string;
  strCargo: string;
  IdRol: number;
  IdUnidad: string;
  strUnidad: string;
  IdRegional: string;
  strRegional: string;
  IdProceso: string;
  strProceso: string;
  IdSubProceso: string;
  strSubProceso: string;
  IdJefe: string;
  strNombreJefe: string;
  dtmFechaRetiro: Date;
  LogClienteProveedor: boolean;
  intSecuencia: number;
  strGrupoPago: string;
  strUbicacion: string;
  strSexo: string;
  strRutaImagenEmpleado: string;
  intPuntosCaritas: number;
  tipoContrato: string;
  strTipoAfiliacion: string;
  intPuntosKilo: number;
  strCorreo: string;
  strNumeroMovil: string;
  LogActivo: boolean;
  dtmFechaIngreso: Date;
  intPuntosCorazones: number;
  intPuntosBombillo: number;
  LogEsJefe: boolean;
}

export interface Categoria {
  IdCategoria: number;
  strCategoria: string;
  strImagenCategoria: string;
  logActivo: boolean;
  strDescripcion: string;
  strEstiloCuadro: string;
  strEstiloBoton: string;
  strEstiloPuntos: string;
  IdEmpresa: number;
}

export interface ImagenSlider {
  IdImagen: number;
  strNombreImagen: string;
  IdEmpresa: number;
  strTextoImagen: string;
  strDescripcionImagen: string;
  strNombreImagenBase64: string;
}
