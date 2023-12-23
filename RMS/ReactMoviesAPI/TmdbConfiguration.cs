using System.Text.Json.Serialization;

namespace ReactMoviesAPI
{
    public class TmdbConfiguration
    {
        [JsonPropertyName("images")]
        public TmdbImages Images { get; set; }

        [JsonPropertyName("change_keys")]
        public List<string> ChangeKeys { get; set; }
    }


}
