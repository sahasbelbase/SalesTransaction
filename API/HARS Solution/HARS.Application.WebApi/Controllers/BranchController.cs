using HARS.Application.Model;
using HARS.Application.Service.Branch;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;

namespace HARS.Application.WebApi.Controllers
{

    [ApiController]
    [Route("api/[controller]/[action]")]
    public class BranchController : ControllerBase
    {
        IBranchService _branchService;
        public BranchController(IBranchService branchService)
        {
            _branchService = branchService;
            
        }

        [HttpGet]
        public IActionResult GetBranch(string Json)
        {
            try
            {
                var branch = _branchService.GetBranch(Json);
                return Ok(branch);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        
        }


        [HttpPost]
        public IActionResult BranchTsk([FromBody] MvJson Json)
        {
            try
            {
                string branch = _branchService.BranchTsk(Json.Json);
                return Ok(branch);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        




    }
}
