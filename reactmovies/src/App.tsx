import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

export const App = () => {
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
      <Outlet />
    </>
  );
};

const Header = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 8px;
`;
