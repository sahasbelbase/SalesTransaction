using HARS.Application.LLBL.DatabaseSpecific;
using HARS.Application.Model;
using HARS.Application.Service.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HARS.Application.Service.Store
{
    public class StoreService : IStoreService
    {
        public string? GetStore(string Json)
        {
            return DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpStoreSelCallAsQuery(Json))?.FirstOrDefault().Json;  
        }

        public string StoreTsk(string Json)
        {
            using (var adpater = DataAccessHelper.GetAdapter())
            {
                string param = Json;

                ActionProcedures.SpStoreTsk(ref Json, adpater);
                adpater.CloseConnection();
            }
            return Json;
        }
    }
}
