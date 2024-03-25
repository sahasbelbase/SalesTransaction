using HARS.Application.Model;
using HARS.Application.Service.Common;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;

namespace HARS.Application.WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CommonController : ControllerBase
    {
        ICommonService _commonService;
        public CommonController(ICommonService commonService)
        {
            _commonService = commonService;

        }

        [HttpGet]
        public IActionResult GetNavigation(string Json)
        {
            try
            {
                var common = _commonService.GetNavigation(Json);
                return Ok(common);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }



        }
        [HttpGet]
        public IActionResult GetUserPerson(string Json)
        {
            try
            {
                var common = _commonService.GetUserPerson(Json);
                return Ok(common);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public IActionResult UserTsk([FromBody] MvJson json)
        {
            try
            {
                var userPerson = _commonService.UserTsk(json.Json);
                return Ok(userPerson);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
