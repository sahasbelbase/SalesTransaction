using SD.LLBLGen.Pro.ORMSupportClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HARS.Application.Service.DataAccess
{
    internal interface IDataAccessHelper
    {
        public interface IDataAccessHelper
        {

            List<T> FetchDerivedModel<T>(IRetrievalQuery qry);
            DataAccessManager GetAdapter();
        }
    }
}
