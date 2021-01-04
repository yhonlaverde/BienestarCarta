namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    //[Table("tblBFProductoCompraEmpleado")]
    public partial class tblBFProductoCompraEmpleado
    {
        [Key]
        public int IdProductoCompraEmpleado { get; set; }

        [Required]
        [StringLength(20)]
        public string IdEmpleado { get; set; }

        public int IdProducto { get; set; }

        public int intValorCompra { get; set; }

        public DateTime dtmFechaCompra { get; set; }

        public bool? logEntregado { get; set; }

        public DateTime? dtmFechaEntrega { get; set; }

        public DateTime? dtmFechaNotificacionProveedor { get; set; }

        public int? IdProveedor { get; set; }

        public int? intCantidadComprada { get; set; }

        [StringLength(50)]
        public string strIdCiudad { get; set; }

        public int? IdSede { get; set; }

        public int? IdTipoPuntos { get; set; }

        public int? IdEmpresa { get; set; }

        public int? IdGrupo { get; set; }

        public virtual tblBFProducto tblBFProducto { get; set; }

        public virtual tblCHEmpleado tblCHEmpleado { get; set; }
    }
}
