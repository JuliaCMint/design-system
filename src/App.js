import React from "react";
import styled from "styled-components";
import MainPage from "./pages/MainPage";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const App = () => {
  return (
    <AppContainer>
      <MainPage />
    </AppContainer>
  );
};

export default App;
