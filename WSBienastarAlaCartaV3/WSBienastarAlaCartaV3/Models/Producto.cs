using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WSBienastarAlaCartaV3.Models
{
    public class Producto
    {
        public List<tblBFProducto> productos { get; set; }
        public tblBFCategoria categoria { get; set; }
    }
}