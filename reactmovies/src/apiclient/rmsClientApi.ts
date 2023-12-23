import { ConfigurationApi, MovieApi } from "../data/api/client";

export const useMovieApiClient = () => {
    const movieController = new MovieApi();
    const configController = new ConfigurationApi();

    const getTopRatedMovies = async (page: number = 1) => {
        const result = await movieController.apiMovieTopratedGet({
            page: page,
        });

        return result;
    };

    const getNewReleases = async (page: number = 1) => {
        const result = await movieController.apiMovieNewreleasesGet({
            page: page,
        });

        return result;
    };

    const getConfig = async () => {
        const result = await configController.apiConfigurationDetailsGet();

        return result;
    };

    return { getTopRatedMovies, getConfig, getNewReleases };
};