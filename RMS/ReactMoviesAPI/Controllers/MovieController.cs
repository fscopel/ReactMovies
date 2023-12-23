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

            var result = await _tmdbApiService.GetTopRatedMovies(page);
            if(string.IsNullOrEmpty(result) == false)
            {
                return JsonSerializer.Deserialize<TopRatedResult>(result);
            }   

            return NotFound();
            
        }

        [HttpGet("newreleases")]
        public async Task<ActionResult<NewReleaseMovies?>> GetNewReleases(int page = 1)
        {
            page = page <= 0 ? 1 : page;

            var result = await _tmdbApiService.GetNewReleases(page);
            if (string.IsNullOrEmpty(result) == false)
            {
                return JsonSerializer.Deserialize<NewReleaseMovies>(result);
            }

            return NotFound();

        }

        [HttpGet("nowplaying")]
        public async Task<ActionResult<string>> GetNowPlaying(int page = 1)
        {
            page = page <= 0 ? 1 : page;

            var result = await _tmdbApiService.GetNowPlayingMovies(page);
            if (string.IsNullOrEmpty(result) == false)
            {
                return result;
            }

            return NotFound();

        }

    }
}
