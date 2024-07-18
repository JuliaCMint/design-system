import styled from "styled-components";
import { PaddingWrapper } from "./patterns/PaddingWrapper";

export const Button = styled(PaddingWrapper).attrs(() => ({
  as: "button",
  padding: ["m", "l"],
}))`
  background-color: ${(props) => (props.primary ? "#904C77" : "transparent")};
  color: ${(props) => (props.primary ? "white" : "#19141e")};
  border: ${(props) =>
    props.primary ? "1px solid transparent" : "1px solid #904C77"};
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor ?? "#904c7766"};
  }
`;
