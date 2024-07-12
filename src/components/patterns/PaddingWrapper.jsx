import styled from "styled-components";
import { spacingSchema } from "../common/spaces";

export const PaddingWrapper = styled.div`
  padding: ${(props) => {
    return []
      .concat(props.padding)
      .map((paddingValue) => spacingSchema[paddingValue])
      .join(" ");
  }};
`;