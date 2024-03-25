using HARS.Application.LLBL.DatabaseSpecific;
using HARS.Application.Model;
using HARS.Application.Service.DataAccess;
using System.Linq;

namespace HARS.Application.Service.Common
{
    public class CommonService : ICommonService
    {
        public string GetNavigation(string json)
        {
            return DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpNavigationSelCallAsQuery(json))?.FirstOrDefault()?.Json;
        }

        public string GetUserPerson(string json)
        {
            var output = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpUserPersonSelCallAsQuery(json))?.FirstOrDefault()?.Json;

            return output;
        }

        public string UserTsk(string Json)
        {
            using (var adapter = DataAccessHelper.GetAdapter())
            {
                string param = Json;

                ActionProcedures.SpUserTsk(ref Json, adapter);

                adapter.CloseConnection();
            }
            return Json;
        }
    }
}
