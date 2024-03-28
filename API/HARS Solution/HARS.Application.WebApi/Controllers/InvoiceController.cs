using HARS.Application.Model;
using HARS.Application.Service.Invoice;
using Microsoft.AspNetCore.Mvc;
using System;

namespace HARS.Application.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class InvoiceController : ControllerBase
    {
        private readonly IInvoiceService _invoiceService;

        public InvoiceController(IInvoiceService invoiceService)
        {
            _invoiceService = invoiceService ?? throw new ArgumentNullException(nameof(invoiceService));
        }

        [HttpGet]
        public IActionResult GetInvoice(string Json)
        {
            try
            {
                var invoice = _invoiceService.GetInvoice(Json);
                return Ok(invoice);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
