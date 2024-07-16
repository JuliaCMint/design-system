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

  return (
    <div>
      <h1>{selectedMenuItem}</h1>
      {renderContent()}
    </div>
  );
};

export default MainContent;
