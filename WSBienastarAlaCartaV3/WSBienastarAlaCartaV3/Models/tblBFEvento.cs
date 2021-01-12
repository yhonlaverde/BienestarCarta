namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblBFEvento")]
    public class tblBFEvento
    {
        [Key]
        public int IdEvento { get; set; }

        [StringLength(50)]
        public string strNombreEvento { get; set; }

        [StringLength(8000)]
        public string strDescripcion { get; set; }

        [StringLength(3000)]
        public string strRutaEvento { get; set; }

        public DateTime? dtmFechaInicio { get; set; }
        public bool? LogActivo { get; set; }
        public DateTime? dtmFechaFinzalizacion { get; set; }

        [StringLength(500)]
        public string strDescripcionCorta { get; set; }
        public int? IdEmpresa { get; set; }
        public bool? bInscribirInvitados { get; set; }
        public int? intNroInventadosEvento { get; set; }
    }
}