using HARS.Application.LLBL.DatabaseSpecific;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HARS.Application.Service.DataAccess
{
   
        public class DataAccessManager : DataAccessAdapter
        {
            public DataAccessManager() : base() { }

            public DataAccessManager(bool keepConnectionOpen) : base(true) { }

        
    }
}
