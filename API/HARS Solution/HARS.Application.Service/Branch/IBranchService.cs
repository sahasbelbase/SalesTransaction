using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HARS.Application.Service.Branch
{
    public interface IBranchService
    {
        public string GetBranch(string Json);

        public string BranchTsk(string Json);

    }
}
