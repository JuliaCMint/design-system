import { Logo } from "./Logo";
import { GridLayers } from "./patterns/GridLayers";
import { Split } from "./patterns/Split";
import logoImg from "../images/girl.png";

const GeneralContent = () => {
  const LabeledInput = ({ label, children }) => {
    return (
      <GridLayers as="label" gap="s">
        {label}
        {children}
      </GridLayers>
    );
  };

  return (
    <GridLayers>
      <Split gap="l" fraction="auto-end">
        <GridLayers>
          <LabeledInput label="Name">
            <input type="text" />
          </LabeledInput>
          <LabeledInput label="Email">
            <input type="email" />
          </LabeledInput>
        </GridLayers>
        <Logo image={logoImg} size="10rem" />
      </Split>
    </GridLayers>
  );
};
export default GeneralContent;
