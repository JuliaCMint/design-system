import styled from "styled-components";
import GeneralContent from "./GeneralContent";
import { CenterAlignedContainer } from "./patterns/CenterAlignedContainer";
import { GridLayers } from "./patterns/GridLayers";
import { PaddingWrapper } from "./patterns/PaddingWrapper";

const MainContent = ({ selectedMenuItem }) => {
  const renderContent = () => {
    switch (selectedMenuItem) {
      case "General":
        return <GeneralContent />;
      case "Services":
        return <p>This is the services content</p>;
      case "Membership":
        return <p>This is the membership content</p>;
      case "Notifications":
        return <p>This is the notifications content</p>;
      default:
        return null;
    }
  };

  const ContentBox = styled.div`
    border-inline-start: 1px solid #d7cdcc;

    > * + * {
      border-block-start: 1px solid #d7cdcc;
    }
  `;

  return (
    <ContentBox>
      <PaddingWrapper padding={["m", "l"]}>
        <h1>{selectedMenuItem}</h1>
        {renderContent()}
      </PaddingWrapper>
    </ContentBox>
  );
};

export default MainContent;
