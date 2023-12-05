using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ReactMoviesAPI.Service;
using System.Text.Json;

namespace ReactMoviesAPI.Controllers
{
    [ApiController]
    [Route("api/configuration")]
    public class ConfigurationController : ControllerBase
    {
        private readonly TMDBApiService _tmdbApiService;

        public ConfigurationController(TMDBApiService tmdbApiService)
        {
            _tmdbApiService = tmdbApiService;
        }

        [HttpGet("details")]
        public async Task<ActionResult<string?>> GetConfigDetails()
        {
            var result = await _tmdbApiService.GetConfigurationDetails();
            //if(string.IsNullOrEmpty(result) == false)
            //{
            //    return JsonSerializer.Deserialize<TopRatedResult>(result);
            //}   

            return result;


        }

    }
}
