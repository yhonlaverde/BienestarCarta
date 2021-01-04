namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblBFECCategoriaProducto")]
    public partial class tblBFECCategoriaProducto
    {
        [Key]
        public int IdCategoriaP { get; set; }

        public string strDescripcion { get; set; }

        [StringLength(120)]
        public string strDescripcionCategoria { get; set; }

        public bool? bitEstadoVisual { get; set; }
    }
}
