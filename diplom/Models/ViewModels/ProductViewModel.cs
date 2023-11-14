using System.Collections.Generic;

namespace diplom.Models.ViewModels
{
    public class ProductViewModel
    {
        public IEnumerable<Product> Products { get; set;}
        public bool HasResults { get; set; }
    }
}
