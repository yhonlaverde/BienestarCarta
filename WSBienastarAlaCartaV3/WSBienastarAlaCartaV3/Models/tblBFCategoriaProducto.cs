namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    //[Table("tblBFCategoriaProducto")]
    public partial class tblBFCategoriaProducto
    {
        [Key]
        public int IdCategoriaP { get; set; }

        public string strDescripcion { get; set; }

        [StringLength(20)]
        public string strClaseEstilo { get; set; }

        [StringLength(120)]
        public string strDescripcionCategoria { get; set; }

        [StringLength(20)]
        public string strClaseEstiloTitulo { get; set; }

        public int? IdTipo { get; set; }

        public bool? LogActivoInactivo { get; set; }
    }
}
