namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblBFProducto")]
    public partial class tblBFProducto
    {
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        //public tblBFProducto()
        //{
        //    tblBFCalificacionProducto = new HashSet<tblBFCalificacionProducto>();
        //    tblBFInventarioProducto = new HashSet<tblBFInventarioProducto>();
        //    tblBFProductoCompraEmpleado = new HashSet<tblBFProductoCompraEmpleado>();
        //}

        [Key]
        public int IdProducto { get; set; }

        [StringLength(50)]
        public string strDescripcion { get; set; }

        public int? intNroPuntosReq { get; set; }

        [StringLength(200)]
        public string strImagenProducto { get; set; }

        public bool? logActivo { get; set; }

        public int? intNroCompras { get; set; }

        public int? IdCategoria { get; set; }

        public string strDetalle { get; set; }

        [StringLength(500)]
        public string strLink { get; set; }

        public string strArchivo { get; set; }

        [StringLength(300)]
        public string strTipoAfiliacion { get; set; }

        public bool? logIlimitado { get; set; }

        public double? fCalificacionProm { get; set; }

        public bool? logApruebaJefe { get; set; }

        public int? IdEmpresa { get; set; }

        public int? IdProveedor { get; set; }

        public bool? logTiempo { get; set; }

        public int? intDiasPromesaEntrega { get; set; }

        public string strImagenProducto64 { get; set; }

        public bool? logRequiereInscripcion { get; set; }

        public bool? logHoras { get; set; }

        public int? IntTopeHoras { get; set; }

        public int? IdTipoPuntos { get; set; }

        public bool? LogCodigo { get; set; }

        [StringLength(3000)]
        public string strRutaFormato { get; set; }

        public bool? LogVistaCodigo { get; set; }

        public bool? logEsGrupal { get; set; }

        public int? intTiempoVigenciaProductoGrupal { get; set; }

        [StringLength(50)]
        public string strFormatoCodigo { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<tblBFCalificacionProducto> tblBFCalificacionProducto { get; set; }

        //public virtual tblBFCategoria tblBFCategoria { get; set; }

        //public virtual tblBFEmpresa tblBFEmpresa { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<tblBFInventarioProducto> tblBFInventarioProducto { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<tblBFProductoCompraEmpleado> tblBFProductoCompraEmpleado { get; set; }
    }
}
