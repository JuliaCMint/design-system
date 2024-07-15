import styled from "styled-components";

export const CenterAlignedContainer = styled.div`
  box-sizing: content-box;
  margin-inline-start: auto;
  margin-inline-end: auto;

  max-inline-size: ${({ maxWidth }) => maxWidth};

  ${(props) =>
    props.centerChildren &&
    `
  display: flex;
  flex-direction: column;
  align-items: center;
  `}
`;
