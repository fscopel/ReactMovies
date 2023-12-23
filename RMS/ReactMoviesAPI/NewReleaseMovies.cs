using System.Text.Json.Serialization;

namespace ReactMoviesAPI
{
    public class NewReleaseMovies
    {
        [JsonPropertyName("dates")]
        public Dates Dates { get; set; }

        [JsonPropertyName("page")]
        public int Page { get; set; }

        [JsonPropertyName("results")]
        public List<NewReleaseResult> Results { get; set; }

        [JsonPropertyName("total_pages")]
        public int TotalPages { get; set; }

        [JsonPropertyName("total_results")]
        public int TotalResults { get; set; }
    }


}
