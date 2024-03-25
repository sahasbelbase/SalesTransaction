using HARS.Application.LLBL.DatabaseSpecific;
using HARS.Application.Model;
using HARS.Application.Service.DataAccess;
using HARS.Application.Service.SalesTransaction;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HARS.Application.Service.SalesTransaction
{
    public class SalesTransactionService : ISalesTransactionService
    {

        string ISalesTransactionService.GetSalesTrasaction(string Json)
        {
            return DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpSalesTransactionSelCallAsQuery(Json))?.FirstOrDefault().Json;
        }
    }

}

