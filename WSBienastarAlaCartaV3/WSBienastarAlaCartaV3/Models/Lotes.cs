namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Lotes
    {
        public int Id { get; set; }

        [Required]
        [StringLength(20)]
        public string Cantidad { get; set; }
    }
}
