const MainContent = ({ selectedMenuItem }) => {
  const renderContent = () => {
    switch (selectedMenuItem) {
      case "General":
        return (
          <>
            <h1>General</h1>
            <p>This is the general content</p>
          </>
        );
      case "Services":
        return (
          <>
            <h1>Services</h1>
            <p>This is the services content</p>
          </>
        );
      case "Membership":
        return (
          <>
            <h1>Membership</h1>
            <p>This is the membership content</p>
          </>
        );
      case "Notifications":
        return (
          <>
            <h1>Notifications</h1>
            <p>This is the notifications content</p>
          </>
        );
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
};

export default MainContent;
