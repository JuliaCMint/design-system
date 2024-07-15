import React from "react";
import styled from "styled-components";
import { PaddingWrapper } from "./patterns/PaddingWrapper";

const ContentArea = styled(PaddingWrapper).attrs(() => ({
  padding: ["l", "xl"],
}))`
  background-image: linear-gradient(to bottom, #19141e 10rem, #fff 10rem);
`;

const Content = () => {
  return <ContentArea>Content</ContentArea>;
};

export default Content;
