namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblBFCategoria")]
    public partial class tblBFCategoria
    {
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        //public tblBFCategoria()
        //{
        //    tblBFProducto = new HashSet<tblBFProducto>();
        //}

        [Key]
        public int IdCategoria { get; set; }

        [StringLength(500)]
        public string strCategoria { get; set; }

        [StringLength(200)]
        public string strImagenCategoria { get; set; }

        public bool? logActivo { get; set; }

        [StringLength(500)]
        public string strDescripcion { get; set; }

        [StringLength(200)]
        public string strEstiloCuadro { get; set; }

        [StringLength(200)]
        public string strEstiloBoton { get; set; }

        [StringLength(200)]
        public string strEstiloPuntos { get; set; }

        public int? IdEmpresa { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<tblBFProducto> tblBFProducto { get; set; }
    }
}
