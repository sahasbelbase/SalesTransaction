using HARS.Application.Model;
using HARS.Application.Service.Department;
using Microsoft.AspNetCore.Mvc;

namespace HARS.Application.WebApi.Controllers
{

    [ApiController]
    [Route("api/[controller]/[action]")]
    public class DepartmentController : ControllerBase
    {
        IDepartmentService _departmentService;
        public DepartmentController(IDepartmentService departmentService)
        {
            _departmentService = departmentService;
            
        }

        [HttpGet]
        public IActionResult GetDepartment(string Json)
        {
            try
            {
                var department = _departmentService.GetDepartment(Json);
                return Ok(department);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        
        }


        [HttpPost]
        public IActionResult DepartmentTsk([FromBody] MvJson Json)
        {
            try
            {
                var department = _departmentService.DepartmentTsk(Json.Json);
                return Ok(department);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }




    }
}
