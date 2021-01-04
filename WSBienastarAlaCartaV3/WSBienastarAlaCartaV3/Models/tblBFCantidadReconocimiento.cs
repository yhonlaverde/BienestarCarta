namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    //[Table("tblBFCantidadReconocimiento")]
    public partial class tblBFCantidadReconocimiento
    {
        [Key]
        public int IdCantidadReonocimiento { get; set; }

        [StringLength(500)]
        public string strCantidadReconocimiento { get; set; }

        public int? valorCantidad { get; set; }

        public int? IdEmpresa { get; set; }
    }
}
