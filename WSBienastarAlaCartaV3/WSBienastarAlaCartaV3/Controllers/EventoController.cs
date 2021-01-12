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
    public class EventoController : ApiController
    {
        private Modelodos db = new Modelodos();
        [HttpGet]
        [Route("api/GetInfoEvento/{idEmpresa}")]
        public IQueryable<tblBFEvento> GetInfoEvento(int idEmpresa)
        {

            var eventolist = from evento in db.tblBFEvento
                           where evento.IdEmpresa == idEmpresa
                           select evento;



            return eventolist.Where(p => p.LogActivo == true).OrderBy(ord => ord.dtmFechaInicio); ;
        }
    }
}
