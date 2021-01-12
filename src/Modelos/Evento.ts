export interface Evento {
  IdEvento: number;
  strNombreEvento: string;
  strDescripcion: string;
  strRutaEvento: string;
  dtmFechaInicio: Date;
  LogActivo: boolean;
  dtmFechaFinzalizacion: string;
  strDescripcionCorta: string;
  IdEmpresa: number;
  bInscribirInvitados: boolean;
  intNroInventadosEvento: number;
}
