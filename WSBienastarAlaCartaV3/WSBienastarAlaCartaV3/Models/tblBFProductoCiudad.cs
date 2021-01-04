namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    //[Table("tblBFProductoCiudad")]
    public partial class tblBFProductoCiudad
    {
        [Key]
        public int idProductoCiudad { get; set; }

        public int? idProducto { get; set; }

        public int? idCiudad { get; set; }

        public bool? LogActivo { get; set; }
    }
}
