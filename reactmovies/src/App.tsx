import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <Header>
        <Link to={`/`}>Home</Link>
        {" | "}
        <Link to={`/moviereviews`}>Movie Reviews</Link>
        {" | "}
        <Link to={`/toprated`}>Top Rated</Link>
        {" | "}
        <Link to={`/newreleases`}>New Releases</Link>
        {" | "}
        <Link to={`/about`}>About</Link>
        {" | "}
        <Link to={`/contact`}>Contact</Link>
        <hr style={{ margin: "0px", marginTop: "8px" }} />
      </Header>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
      <Footer>
        {"Data source and images provided by "}
        <img src="/tmdb_logo.svg" alt="TMDB attribution logo" width={80} />
      </Footer>
    </>
  );
};

const Header = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 8px;
  background-color: #242424;
`;

const Footer = styled.div`
  background-color: #242424;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 4px;
  padding-top: 4px;
  font-size: 10px;
`;
