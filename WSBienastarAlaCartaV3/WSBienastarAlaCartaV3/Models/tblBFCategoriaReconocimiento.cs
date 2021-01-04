namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    //[Table("tblBFCategoriaReconocimiento")]
    public partial class tblBFCategoriaReconocimiento
    {
        [Key]
        public int IdCategoria { get; set; }

        [StringLength(100)]
        public string strCategoria { get; set; }

        public bool? LogActivo { get; set; }

        [StringLength(3000)]
        public string strImagenCategoria { get; set; }

        public int? IdEmpresa { get; set; }
    }
}
