using diplom.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Metadata.Edm;
using System.Diagnostics;
using System.Linq;
using System.IO;
using System.Drawing;
using System.Drawing.Imaging;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Web.Mvc;

namespace diplom.Controllers
{
    public class HomeController : Controller
    {
        private MainContext db = new MainContext();
        private readonly ILogger<HomeController> _logger;
        //List<Product> Products = MainContext.Instantce.Products.ToList();
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult HomePage()
        {
           return View("HomePage", "~/css/site.css"); 
        }

        public IActionResult MainPage()
        {
            var products = db.Product.ToList();
            return View(products);
        }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
