namespace WSBienastarAlaCartaV3.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class tblBFEmpresas
    {
        public int Id { get; set; }

        public int IdEmpresa { get; set; }

        public string strSiglas { get; set; }

        public string strNit { get; set; }

        public int intPersonas { get; set; }

        public string strZona { get; set; }

        public string strCiudad { get; set; }

        public string strTipo { get; set; }

        public bool LogSedeUnica { get; set; }

        public bool LogActivo { get; set; }

        public string strUrlLogo { get; set; }

        public string strUrlBanner { get; set; }

        public string strSiglaEmpresa { get; set; }

        public string strColorEmpresa { get; set; }

        public string strLogo64 { get; set; }

        public string strColorSecundario { get; set; }

        public string strLogoHerramientaEmpresa { get; set; }
    }
}
