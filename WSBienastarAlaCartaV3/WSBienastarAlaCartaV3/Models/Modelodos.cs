namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Modelodos : DbContext
    {
        public Modelodos()
            : base("name=Modelodos")
        {
        }

        public virtual DbSet<Lotes> Lotes { get; set; }
        public virtual DbSet<tblBFCalificacionProducto> tblBFCalificacionProducto { get; set; }
        public virtual DbSet<tblBFCantidadReconocimiento> tblBFCantidadReconocimiento { get; set; }
        public virtual DbSet<tblBFCategoria> tblBFCategoria { get; set; }
        public virtual DbSet<tblBFCategoriaProducto> tblBFCategoriaProducto { get; set; }
        public virtual DbSet<tblBFCategoriaRecompensa> tblBFCategoriaRecompensa { get; set; }
        public virtual DbSet<tblBFCategoriaReconocimiento> tblBFCategoriaReconocimiento { get; set; }
        public virtual DbSet<tblBFECCategoriaProducto> tblBFECCategoriaProducto { get; set; }
        public virtual DbSet<tblBFEHistoricoPuntosAcumEmpleado> tblBFEHistoricoPuntosAcumEmpleado { get; set; }
        public virtual DbSet<tblBFEmpresa> tblBFEmpresa { get; set; }
        public virtual DbSet<tblBFEmpresas> tblBFEmpresas { get; set; }

        public virtual DbSet<tblBFImagenProducto> tblBFImagenProducto { get; set; }

        public virtual DbSet<tblBFProducto> tblBFProducto { get; set; }
        public virtual DbSet<tblBFProductoCiudad> tblBFProductoCiudad { get; set; }
        public virtual DbSet<tblBFProductoCompraEmpleado> tblBFProductoCompraEmpleado { get; set; }
        public virtual DbSet<tblBFProductoProveedor> tblBFProductoProveedor { get; set; }

        public virtual DbSet<tblCHEmpleado> tblCHEmpleado { get; set; }

        public virtual DbSet<tblBFImagenSlider> tblBFImagenSlider { get; set; }

        public virtual DbSet<tblBFEvento> tblBFEvento { get; set; }
      

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

        }
    }
}
