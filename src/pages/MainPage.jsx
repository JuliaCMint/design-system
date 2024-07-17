import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Content from "../components/Content";

const MainPageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainPage = () => {
  return (
    <MainPageContainer>
      <Header />
      <Content />
    </MainPageContainer>
  );
};

export default MainPage;
