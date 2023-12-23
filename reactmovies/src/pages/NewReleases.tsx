import { useState } from "react";
import styled from "styled-components";
import { Loading } from "../components/Loading";
import { ApiHooks } from "../hooks/ApiHooks";

export const NewReleases = () => {
  const apiHooks = ApiHooks();
  const [page, setPage] = useState(1);

  const { data: configData, isPending: isFetchingConfig } =
    apiHooks.useConfig();
  const { data: newReleases, isPending: isFetchingNewReleases } =
    apiHooks.useNewReleases(page);

  if (isFetchingConfig || isFetchingNewReleases) {
    return <Loading />;
  }

  function navigateToPage() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <h1>New Releases</h1>

      <NewReleasesContainer>
        {newReleases?.results?.map(
          (m) => (
            console.log(m),
            (
              <NewReleaseItem key={m.id}>
                <p style={{ textAlign: "start", fontSize: "x-large" }}>
                  {m.title}
                </p>
                {configData?.images?.baseUrl != null &&
                  configData?.images?.logoSizes != null && (
                    <img style={{ maxWidth: "400px" }}
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
              </NewReleaseItem>
            )
          )
        )}
      </NewReleasesContainer>

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
          {page} of {newReleases?.totalPages}{" "}
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

const NewReleasesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 32px;
`;

const NewReleaseItem = styled.div`
  cursor: pointer;
  max-width: 500px;
`;
