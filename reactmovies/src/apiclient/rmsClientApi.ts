import { MovieApi } from "../data/api/client";

export const useMovieApiClient = () => {
    const movieController = new MovieApi();

    const getTopRatedMovies = async () => {
        const result = await movieController.apiMovieTopratedGet({
            page: 1,
        });

        return result;
    };

    return { getTopRatedMovies };
};