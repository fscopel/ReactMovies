using System.Net.Http;
using System.Threading.Tasks;


namespace ReactMoviesAPI.Service
{

    public class TMDBApiService
    {
        private readonly HttpClient _httpClient;
        private readonly string _apiKey;

        public TMDBApiService(IConfiguration config,  HttpClient httpClient)
        {
            _apiKey = config["TMDB:APIKey"];

            _httpClient = httpClient;
            _httpClient.BaseAddress = new Uri("https://api.themoviedb.org/3/");
        }

        public async Task<string> GetTopRatedMovies(int page)
        {
            var response = await _httpClient.GetAsync($"movie/top_rated?page={page}&api_key={_apiKey}");
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            return content;
        }

        public async Task<string> GetConfigurationDetails()
        {
            var response = await _httpClient.GetAsync($"configuration?api_key={_apiKey}");
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            return content;
        }
    }

}
