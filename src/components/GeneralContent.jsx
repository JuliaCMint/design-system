import { Logo } from "./Logo";
import { GridLayers } from "./patterns/GridLayers";
import { Split } from "./patterns/Split";
import logoImg from "../images/girl.png";
import { GridColumns } from "./patterns/GridColumns";

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
          <LabeledInput label="Username">
            <input type="text" />
          </LabeledInput>
          <LabeledInput label="About">
            <input type="text" />
          </LabeledInput>
        </GridLayers>
        <Logo image={logoImg} size="10rem" border="1px solid #19141e" />
      </Split>

      <GridColumns gap="l" columns={2}>
        <LabeledInput label="First Name">
          <input type="text" />
        </LabeledInput>
        <LabeledInput label="Last Name">
          <input type="text" />
        </LabeledInput>
        <LabeledInput label="Company">
          <input type="text" />
        </LabeledInput>
        <LabeledInput label="Role">
          <input type="text" />
        </LabeledInput>
      </GridColumns>
    </GridLayers>
  );
};
export default GeneralContent;
