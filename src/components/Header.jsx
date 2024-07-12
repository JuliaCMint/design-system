import React from "react";
import { StretchableFlexContainer } from "./patterns/StretchableFlexContainer";
import { InlineFlexContainer } from "./patterns/InlineFlexContainer";
import { PaddingWrapper } from "./patterns/PaddingWrapper";
import styled from "styled-components";

const Menu = styled(StretchableFlexContainer).attrs(() => ({
  as: PaddingWrapper,
  padding: ["l", "xl"],
  gap: "m",
  stretch: 1,
}))`
  background-color: #19141e;
  color: white;
`;

const Header = () => {
  return (
    <Menu>
      <div>logo</div>
      <InlineFlexContainer gap="m" justify="center" align="center">
        <span>About</span>
        <span>Gallery</span>
        <span>Events</span>
        <span>Contact</span>
      </InlineFlexContainer>
      <StretchableFlexContainer gap="m" align="center" justify="end">
        <span>Info</span>
        <button>Sign In</button>
      </StretchableFlexContainer>
    </Menu>
  );
};

export default Header;
