using System.Text.Json.Serialization;

namespace ReactMoviesAPI
{

    public class TopRatedResult
    {
        [JsonPropertyName("page")]
        public int Page { get; set; }

        [JsonPropertyName("results")]
        public List<TopRatedMovies> TopRatedMovies { get; set; }

        [JsonPropertyName("total_pages")]
        public int TotalPages { get; set; }

        [JsonPropertyName("total_results")]
        public int TotalResults { get; set; }
    }
}
