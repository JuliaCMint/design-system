import styled from "styled-components";
import { PaddingWrapper } from "./patterns/PaddingWrapper";

export const Button = styled(PaddingWrapper).attrs(() => ({
  as: "button",
  padding: ["m", "l"],
}))`
  background-color: ${(props) => props.backgroundColor ?? "#904C77"};
  color: ${(props) => props.color ?? "white"};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor ?? "#904c7766"};
  }
`;
