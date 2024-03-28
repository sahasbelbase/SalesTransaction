using HARS.Application.LLBL.DatabaseSpecific;
using HARS.Application.Model;
using HARS.Application.Service.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HARS.Application.Service.Department
{
    public class DepartmentService : IDepartmentService
    {
        public string? GetDepartment(string Json)
        {
            return DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpDepartmentSelCallAsQuery(Json))?.FirstOrDefault().Json;
        }

        public string DepartmentTsk(string Json)
        {
            using (var adpater = DataAccessHelper.GetAdapter())
            {
                string param = Json;

                ActionProcedures.SpDepartmentTsk(ref Json, adpater);
                adpater.CloseConnection();
            }
            return Json;
        }
    }
}
