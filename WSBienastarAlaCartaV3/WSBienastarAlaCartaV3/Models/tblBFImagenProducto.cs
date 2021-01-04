namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    //[Table("tblBFImagenProducto")]
    public partial class tblBFImagenProducto
    {
        [Key]
        public int IdImagen { get; set; }

        public int? IdProducto { get; set; }

        [StringLength(3000)]
        public string strRutaImagen { get; set; }
    }
}
