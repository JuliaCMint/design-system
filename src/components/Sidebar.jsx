import styled from "styled-components";
import { GridLayers } from "./patterns/GridLayers";
import { PaddingWrapper } from "./patterns/PaddingWrapper";

const SideBar = () => {
  const SideMenu = styled(GridLayers).attrs(() => ({
    as: "ul",
    gap: "xs",
  }))`
    list-style-type: none;
    padding-inline-start: 0;
  `;

  return (
    <PaddingWrapper padding={["l", "none"]}>
      <SideMenu>
        <li>General</li>
        <li>Services</li>
        <li>Membership</li>
        <li>Notifications</li>
      </SideMenu>
    </PaddingWrapper>
  );
};
export default SideBar;
