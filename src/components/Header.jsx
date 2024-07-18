import React from "react";
import { StretchableFlexContainer } from "./patterns/StretchableFlexContainer";
import { InlineFlexContainer } from "./patterns/InlineFlexContainer";
import { PaddingWrapper } from "./patterns/PaddingWrapper";
import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { Logo } from "./Logo";
import logoImg from "../images/girl.png";
import { Button } from "./Button";

export const MenuWrapper = styled(PaddingWrapper).attrs(() => ({
  padding: ["m", "xl"],
}))`
  background-color: #19141e;
  border-block-end: 0.1px solid #ffffff4b;
`;

const Menu = styled(StretchableFlexContainer).attrs(() => ({
  gap: "m",
  stretch: 1,
  switchAt: "600px",
  justify: "center",
}))`
  background-color: #19141e;
  color: white;
`;

const MenuItemsContainer = styled(InlineFlexContainer).attrs(() => ({
  as: "ul",
  justify: "flex-start",
}))`
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const MenuItem = styled(PaddingWrapper).attrs(() => ({
  as: "li",
  padding: ["m", "l"],
}))`
  background-color: ${(props) => (props.active ? "#904c7766" : "transparent")};
  list-style-type: none;
  border-radius: ${(props) => props.borderRadius ?? "0.25rem"};
  &:hover {
    background-color: #904c7766;
  }
`;

const Header = () => {
  return (
    <MenuWrapper>
      <Menu>
        <Logo image={logoImg} />
        <nav>
          <MenuItemsContainer>
            <MenuItem active>About</MenuItem>
            <MenuItem>Gallery</MenuItem>
            <MenuItem>Events</MenuItem>
            <MenuItem>Contact</MenuItem>
          </MenuItemsContainer>
        </nav>
        <StretchableFlexContainer>
          <SearchBar placeholder="Search" />
          <Button primary>Sign In</Button>
        </StretchableFlexContainer>
      </Menu>
    </MenuWrapper>
  );
};

export default Header;
