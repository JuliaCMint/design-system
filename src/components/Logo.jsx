import styled from "styled-components";

export const Logo = styled.div`
  --size: ${(props) => props.size ?? "2rem"};
  background: ${(props) => (props.image ? `url(${props.image})` : "#904C77")};
  background-size: cover;
  width: var(--size);
  height: var(--size);
  ${(props) => !props.square && "border-radius: 50%;"}
`;
