using HARS.Application.Model;
using HARS.Application.Service.Store;
using Microsoft.AspNetCore.Mvc;

namespace HARS.Application.WebApi.Controllers
{

    [ApiController]
    [Route("api/[controller]/[action]")]
    public class StoreController : ControllerBase
    {
        IStoreService _storeService;
        public StoreController(IStoreService storeService)
        {
            _storeService = storeService;
            
        }

        [HttpGet]
        public IActionResult GetStore(string Json)
        {
            try
            {
                var Store = _storeService.GetStore(Json);
                return Ok(Store);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        
        }


        [HttpPost]
        public IActionResult StoreTsk([FromBody] MvJson Json)
        {
            try
            {
                var Store = _storeService.StoreTsk(Json.Json);
                return Ok(Store);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }




    }
}
