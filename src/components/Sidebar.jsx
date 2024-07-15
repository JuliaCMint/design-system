import { PaddingWrapper } from "./patterns/PaddingWrapper";

const SideBar = () => {
  return (
    <PaddingWrapper padding={["l", "none"]}>
      <div>left</div>
      <div>right</div>
    </PaddingWrapper>
  );
};
export default SideBar;
