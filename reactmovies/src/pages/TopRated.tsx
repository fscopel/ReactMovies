import { useState } from "react";
import styled from "styled-components";
import { Loading } from "../components/Loading";
import { ApiHooks } from "../hooks/ApiHooks";

export const TopRated = () => {
  const apiHooks = ApiHooks();
  const [page, setPage] = useState(1);

  const { data: configData, isPending: isFetchingConfig } =
    apiHooks.useConfig();
  const { data: topRatedMovies, isPending: isFetchingTopRated } =
    apiHooks.useTopRatedMovies(page);

  if (isFetchingConfig || isFetchingTopRated) {
    return <Loading />;
  }

  function openDetails(id: number | undefined) {
    console.log(`${id} openDetails`);
  }

  function navigateToPage() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <h1>Top Rated</h1>

      <TopRatedContainer>
        {topRatedMovies?.results?.map((m) => (
          <TopRatedItem key={m.id} onClick={() => openDetails(m.id)}>
            <p style={{ textAlign: "start", fontSize: "x-large" }}>
              {m.title}
            </p>
            {configData?.images?.baseUrl != null &&
              configData?.images?.logoSizes != null && (
                <img
                  style={{ maxWidth: "400px" }}
                  src={
                    configData?.images?.baseUrl +
                    configData?.images?.logoSizes[5] +
                    m.posterPath
                  }
                />
              )}
            <p style={{ textAlign: "start", maxWidth: "400px" }}>
              <div>Overview</div>
              <p>{m.overview}</p>
            </p>
          </TopRatedItem>
        ))}
      </TopRatedContainer>

      <div style={{ marginBottom: "32px" }}>
        <button
          onClick={() => {
            setPage((prevPage) => prevPage - 1);
            navigateToPage();
          }}
        >
          Previous
        </button>
        <span>
          {" "}
          {page} of {topRatedMovies?.totalPages}{" "}
        </span>
        <button
          onClick={() => {
            setPage((prevPage) => prevPage + 1);
            navigateToPage();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

const TopRatedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 32px;
`;

const TopRatedItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  max-width: 500px;
`;
