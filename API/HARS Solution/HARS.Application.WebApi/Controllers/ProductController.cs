using HARS.Application.Model;
using HARS.Application.Service.Product;
using Microsoft.AspNetCore.Mvc;

namespace HARS.Application.WebApi.Controllers
{

    [ApiController]
    [Route("api/[controller]/[action]")]
    public class ProductController : ControllerBase
    {
        IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService;
            
        }

        [HttpGet]
        public IActionResult GetProduct(string Json)
        {
            try
            {
                var Product = _productService.GetProduct(Json);
                return Ok(Product);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        
        }


        [HttpPost]
        public IActionResult ProductTsk([FromBody] MvJson Json)
        {
            try
            {
                var product = _productService.ProductTsk(Json.Json);
                return Ok(product);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }




    }
}
