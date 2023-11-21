import styled from "styled-components";
import "./App.css";
import { HomePage } from "./pages/HomePage";

export const App = () => {
  return (
    <div className="App">
      <Header>
        Home | Movie Reviews | Top Rated | New Releases | About | Contact
        <hr />
      </Header>
      <HomePage />
    </div>
  );
};

const Header = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
