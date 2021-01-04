using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WSBienastarAlaCartaV3.Models
{
    public class EmpleadoAutenticado
    {
        public tblCHEmpleado empleado { get; set; }
        public List<tblBFCategoria> categorias { get; set; }
        public List<tblBFImagenSlider> sliders { get; set; }

    }
}