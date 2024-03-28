using HARS.Application.LLBL.DatabaseSpecific;
using HARS.Application.Model;
using HARS.Application.Service.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HARS.Application.Service.Invoice
{
    public class InvoiceService : IInvoiceService
    {
        public string GetInvoice(string Json)
        {
            return DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpInvoiceSelCallAsQuery(Json))?.FirstOrDefault().Json;
        }
    }
}
