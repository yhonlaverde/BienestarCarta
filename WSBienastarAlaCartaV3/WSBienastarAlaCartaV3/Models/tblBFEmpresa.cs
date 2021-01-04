namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblBFEmpresa")]
    public partial class tblBFEmpresa
    {
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        //public tblBFEmpresa()
        //{
        //    tblBFInventarioProducto = new HashSet<tblBFInventarioProducto>();
        //    tblBFPoliticaEmpresa = new HashSet<tblBFPoliticaEmpresa>();
        //    tblBFProducto = new HashSet<tblBFProducto>();
        //    tblCHEmpleado = new HashSet<tblCHEmpleado>();
        //}

        [Key]
        public int IdEmpresa { get; set; }

        [StringLength(100)]
        public string strNombreEmpresa { get; set; }

        [StringLength(10)]
        public string strSiglas { get; set; }

        [StringLength(50)]
        public string strNit { get; set; }

        public int? intPersonas { get; set; }

        [StringLength(50)]
        public string strZona { get; set; }

        [StringLength(50)]
        public string strCiudad { get; set; }

        [StringLength(10)]
        public string strTipo { get; set; }

        public bool? LogSedeUnica { get; set; }

        public bool? LogActivo { get; set; }

        [StringLength(1000)]
        public string strUrlLogo { get; set; }

        [StringLength(1000)]
        public string strUrlBanner { get; set; }

        [StringLength(10)]
        public string strSiglaEmpresa { get; set; }

        [StringLength(50)]
        public string strColorEmpresa { get; set; }

        public string strLogo64 { get; set; }

        [StringLength(50)]
        public string strColorSecundario { get; set; }

        [StringLength(1000)]
        public string strLogoHerramientaEmpresa { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<tblBFInventarioProducto> tblBFInventarioProducto { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<tblBFPoliticaEmpresa> tblBFPoliticaEmpresa { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<tblBFProducto> tblBFProducto { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<tblCHEmpleado> tblCHEmpleado { get; set; }
    }
}
