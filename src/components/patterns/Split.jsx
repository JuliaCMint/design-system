import styled from "styled-components";
import { spacingSchema } from "../common/spaces";

const fractions = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};

export const Split = styled.div`
  display: grid;
  gap: ${(props) => spacingSchema[props.gap] ?? spacingSchema.m};
  grid-template-columns: ${({ fraction }) =>
    fractions[fraction] ?? fractions["1/2"]};

  @media (max-width: 768px) {
    grid-template-columns: ${(props) => props.responsive && "1fr"};
  }
`;
