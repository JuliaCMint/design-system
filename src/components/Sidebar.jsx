import styled from "styled-components";
import { GridLayers } from "./patterns/GridLayers";
import { PaddingWrapper } from "./patterns/PaddingWrapper";
import { InlineFlexContainer } from "./patterns/InlineFlexContainer";

const SideBar = ({ selectedMenuItem, setSelectedMenuItem }) => {
  const SideMenu = styled(GridLayers).attrs(() => ({
    as: "ul",
    gap: "xs",
  }))`
    list-style-type: none;
    padding-inline-start: 0;
  `;

  const SideMenuItem = styled(InlineFlexContainer).attrs(() => ({
    as: PaddingWrapper,
    gap: "l",
    padding: ["m", "l"],
    align: "center",
  }))`
    border-inline-start: 0.25rem solid transparent;
    ${(props) =>
      props.active &&
      `
        border-inline-start-color: #19141e;
        background: #904c7766;
      `}
    &:hover {
      background: #904c7766;
    }
  `;

  return (
    <PaddingWrapper padding={["l", "none"]}>
      <SideMenu>
        <SideMenuItem
          active={selectedMenuItem === "General"}
          onClick={() => setSelectedMenuItem("General")}
        >
          General
        </SideMenuItem>
        <SideMenuItem
          active={selectedMenuItem === "Services"}
          onClick={() => setSelectedMenuItem("Services")}
        >
          Services
        </SideMenuItem>
        <SideMenuItem
          active={selectedMenuItem === "Membership"}
          onClick={() => setSelectedMenuItem("Membership")}
        >
          Membership
        </SideMenuItem>
        <SideMenuItem
          active={selectedMenuItem === "Notifications"}
          onClick={() => setSelectedMenuItem("Notifications")}
        >
          Notifications
        </SideMenuItem>
      </SideMenu>
    </PaddingWrapper>
  );
};
export default SideBar;
