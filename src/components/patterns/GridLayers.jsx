import styled from "styled-components";
import { spacingSchema } from "../common/spaces";

export const GridLayers = styled.div`
  display: grid;
  gap: ${(props) => spacingSchema[props.gutter] ?? spacingSchema.l};
`;
