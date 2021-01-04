namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    //[Table("tblBFCalificacionProducto")]
    public partial class tblBFCalificacionProducto
    {
        [Key]
        public int IdCalificacionProducto { get; set; }

        public int? IdProducto { get; set; }

        public int? intCalificacion { get; set; }

        public int? IdEmpleadoCalifica { get; set; }

        public DateTime? dtmFechaCalificacion { get; set; }

        public virtual tblBFProducto tblBFProducto { get; set; }
    }
}
