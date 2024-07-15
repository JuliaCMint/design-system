import React from "react";
import styled from "styled-components";
import { PaddingWrapper } from "./patterns/PaddingWrapper";
import { Split } from "./patterns/Split";

const ContentArea = styled(PaddingWrapper).attrs(() => ({
  padding: ["l", "xl"],
}))`
  background-image: linear-gradient(to bottom, #19141e 10rem, #fff 10rem);
`;

const Content = () => {
  return (
    <ContentArea>
      <h2>Settings</h2>
      <Split>
        <div>left</div>
        <div>right</div>
      </Split>
    </ContentArea>
  );
};

export default Content;
