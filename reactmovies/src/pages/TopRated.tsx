import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Loading } from "../components/Loading";
import { useMovieApiClient } from "../apiclient/rmsClientApi";

export const TopRated = () => {
  const { getTopRatedMovies } = useMovieApiClient();

  const { isPending, data } = useQuery({
    queryKey: ["topRated"],
    queryFn: getTopRatedMovies,
  });

  if (isPending) {
    return <Loading />;
  }

  return (
    <>
      <h1>Top Rated</h1>

      <TopRatedContainer>
        {data?.results?.map((m) => (
          <div>
            <div>{m.title}</div>
            <img
              width={500}
              src={"https://image.tmdb.org/t/p/w500" + m.backdropPath}
            />
          </div>
        ))}
      </TopRatedContainer>
    </>
  );
};

const TopRatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
