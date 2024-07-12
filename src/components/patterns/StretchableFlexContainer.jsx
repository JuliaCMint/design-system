import styled, { css } from "styled-components";
import { InlineFlexContainer } from "./InlineFlexContainer";

const responsive = css`
  --switchAt: ${({ switchAt }) =>
    typeof switchAt === "string" ? switchAt : `${switchAt}px`};

  flex-wrap: wrap;

  & > * {
    min-width: fit-content;
    flex-basis: calc((var(--switchAt) - (100% - var(--gutter))) * 999);
  }
`;

const stretchMap = {
    all: `> *  { flex: 1 }`,
    start: `> :first-child { flex: 1 }`,
    end: `> :last-child { flex: 1 }`,
  };
  
  export const StretchableFlexContainer = styled(InlineFlexContainer)`
    flex-wrap: nowrap;
    ${({ stretch }) => {
      if (typeof stretch === "number")
        return `> :nth-child(${stretch + 1}) { flex: 1 }`;
  
      return stretchMap[stretch] ?? "";
    }}
  
    ${({ switchAt }) => switchAt && responsive}
  `;