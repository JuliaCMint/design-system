import { spacingSchema } from "../common/spaces";

export const Split = styled.div`
  display: grid;
  gap: ${(props) => spacingSchema[props.gap] ?? spacingSchema.m};
`;
