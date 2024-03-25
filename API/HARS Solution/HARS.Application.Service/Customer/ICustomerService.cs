using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HARS.Application.Service.Customer
{
    public interface ICustomerService
    {
        public string GetCustomer(string Json);

        public string CustomerTsk(string Json);


    }
}
