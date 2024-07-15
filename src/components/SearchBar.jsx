import styled from "styled-components";
import { PaddingWrapper } from "./patterns/PaddingWrapper";

export const SearchBar = styled(PaddingWrapper).attrs(() => ({
  as: "input",
  padding: ["m", "l"],
}))`
  background-color: rgba(144, 76, 119, 0.4);
  border: none;
  border-radius: ${(props) => props.borderRadius ?? "0.25rem"};
`;
