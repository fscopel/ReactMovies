using System.Text.Json.Serialization;

namespace ReactMoviesAPI
{
    public class Dates
    {
        [JsonPropertyName("maximum")]
        public string Maximum { get; set; }

        [JsonPropertyName("minimum")]
        public string Minimum { get; set; }
    }

    


}
