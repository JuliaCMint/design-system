import React from "react";
import styled from "styled-components";
import { PaddingWrapper } from "./patterns/PaddingWrapper";
import { Split } from "./patterns/Split";
import { CenterAlignedContainer } from "./patterns/CenterAlignedContainer";

const ContentArea = styled(PaddingWrapper).attrs(() => ({
  padding: ["l", "xl"],
}))`
  background-image: linear-gradient(to bottom, #19141e 10rem, #fff 10rem);
`;

const ContentHeader = styled.header`
  color: #fff;
`;

const Content = () => {
  return (
    <ContentArea>
      <CenterAlignedContainer maxWidth="77rem">
        <ContentHeader>
          <h2>Settings</h2>
        </ContentHeader>
        <Split>
          <div>left</div>
          <div>right</div>
        </Split>
      </CenterAlignedContainer>
    </ContentArea>
  );
};

export default Content;
