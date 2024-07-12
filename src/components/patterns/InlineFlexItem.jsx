import { InlineFlexContainer } from "./InlineFlexContainer";

const stretchMap = {
    all: `> *  { flex: 1 }`,
    start: `> :first-child { flex: 1 }`,
    end: `> :last-child { flex: 1 }`,
  };
  
  export const InlineFlexItem = styled(InlineFlexContainer)`
    flex-wrap: nowrap;
    ${({ stretch }) => {
      if (typeof stretch === "number")
        return `> :nth-child(${stretch + 1}) { flex: 1 }`;
  
      return stretchMap[stretch] ?? "";
    }}
  
    ${({ switchAt }) => switchAt && responsive}
  `;