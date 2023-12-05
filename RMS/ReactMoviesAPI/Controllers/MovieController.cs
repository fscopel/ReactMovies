using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ReactMoviesAPI.Service;
using System.Text.Json;

namespace ReactMoviesAPI.Controllers
{
    [ApiController]
    [Route("api/movie")]
    public class MovieController : ControllerBase
    {
        private readonly TMDBApiService _tmdbApiService;

        public MovieController(TMDBApiService tmdbApiService)
        {
            _tmdbApiService = tmdbApiService;
        }

        [HttpGet("toprated")]
        public async Task<ActionResult<TopRatedResult?>> GetTopRatedMovies(int page = 1)
        {
            page = page <= 0 ? 1 : page;

            var movieData = await _tmdbApiService.GetTopRatedMovies(page);
            if(string.IsNullOrEmpty(movieData) == false)
            {
                return JsonSerializer.Deserialize<TopRatedResult>(movieData);
            }   

            return NotFound();
            
        }

    }
}
