using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HARS.Application.Service.Store
{
    public interface IStoreService
    {
        public string GetStore(string Json);

        public string StoreTsk(string Json);
    }
}
