using Arc_Test_Application.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arc_Test_Application.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ShapesController : ControllerBase
    {

        private readonly ILogger<ShapesController> _logger;
        public readonly IAreaService _areaService;

        public ShapesController(ILogger<ShapesController> logger, IAreaService areaService)
        {
            _logger = logger;
            _areaService = areaService;
        }

        [HttpPost]
        [EnableCors("AllowOrigin")]
        public IActionResult Post([FromBody] CompositeShape compositeShape)
        {
            return Ok(_areaService.GetArea(compositeShape));
        }
    }
}
