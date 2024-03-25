using HARS.Application.LLBL.DatabaseSpecific;
using HARS.Application.Model;
using HARS.Application.Service.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HARS.Application.Service.Customer
{
    public class CustomerService : ICustomerService
    {
        public string GetCustomer(string Json)
        {
            return DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpCustomersSelCallAsQuery(Json))?.FirstOrDefault().Json;  
        }

        public string CustomerTsk(string Json)
        {
            using (var adpater = DataAccessHelper.GetAdapter())
            {
                string param = Json;

                ActionProcedures.SpCustomerTsk(ref Json, adpater);
                adpater.CloseConnection();
            }
            return Json;
        }
    }
}
