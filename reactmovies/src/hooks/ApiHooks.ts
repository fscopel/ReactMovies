import { useQuery } from "@tanstack/react-query";
import { useMovieApiClient } from "../apiclient/rmsClientApi";

export const ApiHooks = () => {

    const { getTopRatedMovies, getConfig, getNewReleases } = useMovieApiClient();

    const useTopRatedMovies = (page: number = 1) => {
        return useQuery({
            queryKey: ["topRated", page],
            queryFn: () => getTopRatedMovies(page),
        });
    }

    const useConfig = () => {
        return useQuery({
            queryKey: ["config"],
            queryFn: () => getConfig(),
        });
    }

    const useNewReleases = (page: number = 1) => {
        return useQuery({
            queryKey: ["newReleases", page],
            queryFn: () => getNewReleases(page),
        });
    }

    return { useTopRatedMovies, useConfig, useNewReleases };

}

