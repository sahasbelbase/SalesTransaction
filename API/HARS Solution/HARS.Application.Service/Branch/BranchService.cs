using HARS.Application.LLBL.DatabaseSpecific;
using HARS.Application.Model;
using HARS.Application.Service.Branch;
using HARS.Application.Service.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HARS.Application.Service.Branch
{
    public class BranchService : IBranchService
    {
        string IBranchService.GetBranch(string Json)
        {
            return DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpBranchSelCallAsQuery(Json))?.FirstOrDefault().Json;
        }

        public string BranchTsk(string Json)
        {
            using (var adpater = DataAccessHelper.GetAdapter())
            {
                string param = Json;

                ActionProcedures.SpBranchTsk(ref Json, adpater);
                adpater.CloseConnection();
            }
            return Json;
        }


    }
}
