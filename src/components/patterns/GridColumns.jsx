import styled from "styled-components";
import { spacingSchema } from "../common/spaces";

export const GridColumns = styled.div`
  --columns: ${({ columns = 1 }) => columns};
  display: grid;
  gap: ${(props) => spacingSchema[props.gap] ?? spacingSchema.l};
  grid-template-columns: repeat(var(--columns), 1fr);
`;
