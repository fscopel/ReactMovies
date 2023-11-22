import styled from "styled-components";
import "./App.css";
import { HomePage } from "./pages/HomePage";

export const App = () => {
  return (
    <>
      <Header>
        Home | Movie Reviews | Top Rated | New Releases | About | Contact
        <hr />
      </Header>
      <HomePage />
    </>
  );
};

const Header = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
