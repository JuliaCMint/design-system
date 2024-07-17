import styled from "styled-components";
import { GridLayers } from "./patterns/GridLayers";
import { PaddingWrapper } from "./patterns/PaddingWrapper";
import { Logo } from "./Logo";
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
          <Logo square size="0.5rem" />
          General
        </SideMenuItem>
        <SideMenuItem
          active={selectedMenuItem === "Services"}
          onClick={() => setSelectedMenuItem("Services")}
        >
          <Logo round size="0.5rem" />
          Services
        </SideMenuItem>
        <SideMenuItem
          active={selectedMenuItem === "Membership"}
          onClick={() => setSelectedMenuItem("Membership")}
        >
          <Logo round size="0.5rem" />
          Membership
        </SideMenuItem>
        <SideMenuItem
          active={selectedMenuItem === "Notifications"}
          onClick={() => setSelectedMenuItem("Notifications")}
        >
          <Logo round size="0.5rem" />
          Notifications
        </SideMenuItem>
      </SideMenu>
    </PaddingWrapper>
  );
};
export default SideBar;
