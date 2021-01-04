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
    public class EmpleadoController : ApiController
    {

        private Modelodos db = new Modelodos();
        [HttpGet]
        [Route("api/GetInfoEmpleado/{idEmpleado}")]
        public EmpleadoAutenticado GetInfoEmpleado(string idEmpleado)
        {
            EmpleadoAutenticado empleadoAutenticado = new EmpleadoAutenticado();
            try
            {
                empleadoAutenticado.empleado = db.tblCHEmpleado.Where(emp => emp.IdEmpleado == idEmpleado && emp.LogActivo == true).FirstOrDefault();
                empleadoAutenticado.sliders = db.tblBFImagenSlider.Where(imgSli => imgSli.IdEmpresa == empleadoAutenticado.empleado.tblBFEmpresa.IdEmpresa).ToList();
                empleadoAutenticado.categorias = db.tblBFCategoria.Where(cat => cat.IdEmpresa == empleadoAutenticado.empleado.tblBFEmpresa.IdEmpresa && cat.logActivo == true).ToList();
            }
            catch (Exception ex)
            {
                Content(HttpStatusCode.BadRequest, "Error " + ex.Message);
            }
            return empleadoAutenticado;

        }

        [HttpPost]
        [Route("authenticate")]
        public IHttpActionResult authenticate(LoginRequest login)
        {
            if (login == null)
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            EmpleadoAutenticado empleadoAutenticado = new EmpleadoAutenticado();
            string strContrasena = login.Password;
            empleadoAutenticado.empleado = db.tblCHEmpleado.Where(emp => emp.strUsuario == login.Text && emp.strContrasena == login.Password && emp.LogActivo == true).FirstOrDefault();
                //TODO: Validate credentials Correctly, this code is only for demo !!
                if (empleadoAutenticado != null)
                {

                    return Ok(empleadoAutenticado);
                }
                else
                {
                    return Unauthorized();
                }
            


        }

        [HttpGet]
        [Route("api/Getautentificacion/")]
        public EmpleadoAutenticado Getautentificacion(string strCorreo, string strContrasena)
        {
            EmpleadoAutenticado empleadoAutenticado = new EmpleadoAutenticado();
            try
            {
                empleadoAutenticado.empleado = db.tblCHEmpleado.Where(emp => emp.strCorreo == strCorreo && emp.strContrasena == strContrasena && emp.LogActivo == true).FirstOrDefault();
            }
            catch (Exception ex)
            {
                Content(HttpStatusCode.BadRequest, "Error " + ex.Message);
            }
            return empleadoAutenticado;

        }
    }


}

