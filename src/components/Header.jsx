import React from "react";
import { StretchableFlexContainer } from "./patterns/StretchableFlexContainer";
import { InlineFlexContainer } from "./patterns/InlineFlexContainer";
import { PaddingWrapper } from "./patterns/PaddingWrapper";
import styled from "styled-components";
import { SearchBar } from "./SearchBar";

const Menu = styled(StretchableFlexContainer).attrs(() => ({
  as: PaddingWrapper,
  padding: ["l", "xl"],
  gap: "m",
  stretch: 1,
}))`
  background-color: #19141e;
  color: white;
`;

const MenuItem = styled(PaddingWrapper).attrs(() => ({
  as: "li",
  padding: ["m", "l"],
}))`
  background-color: ${(props) => (props.active ? "#904C77" : "transparent")};
  list-style-type: none;
`;

const Header = () => {
  return (
    <Menu>
      <div>logo</div>
      <nav>
        <InlineFlexContainer as="ul" gap="m" justify="flex-start" wrap="wrap">
          <MenuItem active>About</MenuItem>
          <MenuItem>Gallery</MenuItem>
          <MenuItem>Events</MenuItem>
          <MenuItem>Contact</MenuItem>
        </InlineFlexContainer>
      </nav>
      <SearchBar placeholder="Search" />
      <button>Sign In</button>
    </Menu>
  );
};

export default Header;
