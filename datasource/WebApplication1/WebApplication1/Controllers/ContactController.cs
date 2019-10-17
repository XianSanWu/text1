using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class ContactController : ApiController
    {
        [HttpGet]
        public object Get()
        {
            string[,] dat = new string[,] { { "Eric", "1980/1/1", "0912345678", "eric@gmail.com", "台北市光復南路179號13樓", "同學" },
                                            { "Amy", "1980/1/1", "0912345678", "eric@gmail.com", "台北市光復南路179號13樓", "客戶" } };
            return dat;
        }
    }
}
