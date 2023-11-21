import React from "react";
import styled from "styled-components";
import { device } from "../utils/devices";

export const HomePage = () => {
  return (
    <HomePageContainer>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of the React Movies application.</p>
    </HomePageContainer>
  );
};

const HomePageContainer = styled.div`
  margin-top: 70px;

  @media ${device.mobileS} {
    margin-top: 50px;
  }

  @media ${device.mobile} {
    margin-top: 30px;
  }
`;
