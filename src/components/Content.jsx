import React, { useState } from "react";
import styled from "styled-components";
import { PaddingWrapper } from "./patterns/PaddingWrapper";
import { Split } from "./patterns/Split";
import { CenterAlignedContainer } from "./patterns/CenterAlignedContainer";
import SideBar from "./Sidebar";
import MainContent from "./MainContent";

const ContentArea = styled(PaddingWrapper).attrs(() => ({
  padding: ["l", "xl"],
}))`
  background-image: linear-gradient(to bottom, #19141e 10rem, #fff 10rem);
`;

const ContentHeader = styled.header`
  color: #fff;
`;

const ContentPane = styled(Split).attrs(() => ({
  gutter: "none",
  fraction: "1/4",
}))`
  background: white;
  border-radius: 0.25rem;
`;

const Content = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("General");

  return (
    <ContentArea>
      <CenterAlignedContainer maxWidth="77rem">
        <ContentHeader>
          <h2>Settings</h2>
        </ContentHeader>
        <ContentPane>
          <SideBar
            selectedMenuItem={selectedMenuItem}
            setSelectedMenuItem={setSelectedMenuItem}
          />
          <MainContent selectedMenuItem={selectedMenuItem} />
        </ContentPane>
      </CenterAlignedContainer>
    </ContentArea>
  );
};

export default Content;
