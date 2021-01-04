namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    //[Table("tblBFProductoProveedor")]
    public partial class tblBFProductoProveedor
    {
        public int? IdProveedor { get; set; }

        public int? IdProducto { get; set; }

        public bool? LogActivo { get; set; }

        [Key]
        public int IdProductoProveedor { get; set; }
    }
}
