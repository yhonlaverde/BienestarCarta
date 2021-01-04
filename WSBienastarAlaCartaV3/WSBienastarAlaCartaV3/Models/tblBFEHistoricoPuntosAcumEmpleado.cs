namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    //[Table("tblBFEHistoricoPuntosAcumEmpleado")]
    public partial class tblBFEHistoricoPuntosAcumEmpleado
    {
        [Key]
        public int IdHistoricoPuntosAcumEmpleado { get; set; }

        [Required]
        [StringLength(20)]
        public string IdEmpleado { get; set; }

        public int? intNroEcoPuntosAcumulados { get; set; }

        public int? intNroPuntosBienestarAcumulados { get; set; }

        public DateTime dtmFechaRegistro { get; set; }

        public bool logUltRegistro { get; set; }

        public int? intMes { get; set; }

        public int? intAnno { get; set; }
    }
}
