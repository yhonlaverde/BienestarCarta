using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WSBienastarAlaCartaV3.Models;

namespace WSBienastarAlaCartaV3.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ProductoController : ApiController
    {
        private Modelodos db = new Modelodos();
         
        //[HttpGet]
        //[Route("api/GetProductoByCategoria/{idCategoria}")]
        //public IQueryable<tblBFProducto> GetProductoByCategoria(string idCategoria)
        //{
        //    var Producto = db.tblBFProducto.Where(prod => prod.IdCategoria.Equals(idCategoria) && prod.logActivo == true);

        //    return Producto;
        //}

        [HttpGet]
        [Route("api/GetProductoByCategoria/{idCategoria}")]
        public Producto GetProductoByCategoria(int idCategoria)
        {
            Producto producto = new Producto();
            try
            {
                producto.productos = db.tblBFProducto.Where(prod => prod.IdCategoria == idCategoria && prod.logActivo == true).ToList();
                producto.categoria = db.tblBFCategoria.Where(cat => cat.IdCategoria == idCategoria && cat.logActivo == true).FirstOrDefault();
            }
            catch (Exception ex)
            {
                Content(HttpStatusCode.BadRequest, "Error " + ex.Message);
            }
            return producto;

        }
    }
}
