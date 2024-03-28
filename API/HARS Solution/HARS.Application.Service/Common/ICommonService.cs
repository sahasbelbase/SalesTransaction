using HARS.Application.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HARS.Application.Service.Common
{
    public interface ICommonService
    {
        public string GetNavigation(string Json);
        public string GetUserPerson(string Json);

        public string UserTsk(string Json);
    }
}
