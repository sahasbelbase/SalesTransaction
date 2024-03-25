using HARS.Application.Model;
using HARS.Application.Service.SalesTransaction;
using Microsoft.AspNetCore.Mvc;

namespace HARS.Application.WebApi.Controllers
{

    [ApiController]
    [Route("api/[controller]/[action]")]
    public class SalesTransactionController : ControllerBase
    {
        ISalesTransactionService _salesTransactionService;
        public SalesTransactionController(ISalesTransactionService storeTransactionService)
        {
            _salesTransactionService = storeTransactionService;

        }

        [HttpGet]
        public IActionResult GetSalesTransaction(string Json)
        {
            try
            {
                var salesTransaction = _salesTransactionService.GetSalesTrasaction(Json);
                return Ok(salesTransaction);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }



    }
}
