using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HARS.Application.Service.Product
{
    public interface IProductService
    {
        public string GetProduct (string Json);

        public string ProductTsk(string Json);
    }
}
