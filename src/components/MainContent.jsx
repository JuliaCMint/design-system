import styled from "styled-components";

const MainContent = ({ selectedMenuItem }) => {
  const renderContent = () => {
    switch (selectedMenuItem) {
      case "General":
        return <p>This is the general content</p>;
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
      <h1>{selectedMenuItem}</h1>
      {renderContent()}
    </ContentBox>
  );
};

export default MainContent;
