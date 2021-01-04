namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblBFImagenSlider")]
    public partial class tblBFImagenSlider
    {
        [Key]
        public int IdImagen { get; set; }

        [StringLength(100)]
        public string strNombreImagen { get; set; }

        public int? IdEmpresa { get; set; }

        [StringLength(500)]
        public string strTextoImagen { get; set; }

        [StringLength(500)]
        public string strDescripcionImagen { get; set; }

        public string strNombreImagenBase64 { get; set; }
    }
}
