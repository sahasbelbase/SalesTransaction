using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HARS.Application.Service.Department
{
    public interface IDepartmentService
    {
        public string GetDepartment(string Json);

        public string DepartmentTsk(string Json);
    }
}
