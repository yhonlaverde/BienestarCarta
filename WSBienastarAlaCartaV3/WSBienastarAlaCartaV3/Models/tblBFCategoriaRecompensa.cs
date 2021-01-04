namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    //[Table("tblBFCategoriaRecompensa")]
    public partial class tblBFCategoriaRecompensa
    {
        [Key]
        public int IdCategoriaRecompensa { get; set; }

        [StringLength(500)]
        public string strCategoriaRecompensa { get; set; }

        public bool? logActivo { get; set; }
    }
}
