namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblCHEmpleado")]
    public partial class tblCHEmpleado
    {

        [Key]
        [StringLength(20)]
        public string IdEmpleado { get; set; }

        [StringLength(500)]
        public string strNombre { get; set; }

        [StringLength(10)]
        public string IdProfesion { get; set; }

        [StringLength(500)]
        public string strProfesion { get; set; }

        [StringLength(500)]
        public string strCargo { get; set; }

        public int? IdRol { get; set; }

        [StringLength(10)]
        public string IdBarrio { get; set; }

        [StringLength(200)]
        public string strBarrio { get; set; }

        [StringLength(10)]
        public string IdUnidad { get; set; }

        [StringLength(200)]
        public string strUnidad { get; set; }

        [StringLength(50)]
        public string IdRegional { get; set; }

        [StringLength(50)]
        public string strRegional { get; set; }

        [StringLength(10)]
        public string IdProceso { get; set; }

        [StringLength(200)]
        public string strProceso { get; set; }

        [StringLength(10)]
        public string IdSubProceso { get; set; }

        [StringLength(200)]
        public string strSubProceso { get; set; }

        [StringLength(20)]
        public string IdJefe { get; set; }

        [StringLength(500)]
        public string strNombreJefe { get; set; }

        public DateTime? dtmFechaRetiro { get; set; }

        public bool? LogClienteProveedor { get; set; }

        public bool? LogGerenteRecursosH { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int intSecuencia { get; set; }

        public bool? LogEvaluar { get; set; }

        [StringLength(100)]
        public string strUsuario { get; set; }

        [StringLength(100)]
        public string strContrasena { get; set; }

        public bool? logObjetivosLegalizados { get; set; }

        public bool? logHabilitarIngresoObjPeriodoCerrado { get; set; }

        public bool? logSuperUsuario { get; set; }

        [StringLength(500)]
        public string strGrupoPago { get; set; }

        [StringLength(500)]
        public string strUbicacion { get; set; }

        public int? intNivel { get; set; }

        [StringLength(2)]
        public string strSexo { get; set; }

        [StringLength(200)]
        public string strRutaImagenEmpleado { get; set; }

        public int? intPuntosCaritas { get; set; }

        public bool? logObjetivosAprobadosJefe { get; set; }

        [StringLength(50)]
        public string strUsuarioRed { get; set; }

        [StringLength(20)]
        public string tipoContrato { get; set; }

        [StringLength(50)]
        public string strTipoAfiliacion { get; set; }

        public bool? logPermisoEntrega { get; set; }

        public int? intPuntosKilo { get; set; }

        public bool? LogAdministrarEcoPuntos { get; set; }

        public int? IdEmpresa { get; set; }

        [StringLength(500)]
        public string strCorreo { get; set; }

        [StringLength(50)]
        public string strNumeroMovil { get; set; }

        public int? IdTipoAdministrador { get; set; }

        public bool? LogActivo { get; set; }

        public DateTime? dtmFechaIngreso { get; set; }

        public int? intPuntosCorazones { get; set; }

        public int? intPuntosBombillo { get; set; }

        public string strImagenEmpleado64 { get; set; }

        public bool? LogEsJefe { get; set; }

        public bool? LogPresidencia { get; set; }

        public bool? LogApruebaTerminos { get; set; }

        public virtual tblBFEmpresa tblBFEmpresa { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<tblBFProductoCompraEmpleado> tblBFProductoCompraEmpleado { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<tblBFPuntosDispEmpleado> tblBFPuntosDispEmpleado { get; set; }
    }
}
