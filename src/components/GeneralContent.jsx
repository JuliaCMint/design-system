import { Logo } from "./Logo";
import { GridLayers } from "./patterns/GridLayers";
import { Split } from "./patterns/Split";
import logoImg from "../images/girl.png";
import { GridColumns } from "./patterns/GridColumns";
import styled from "styled-components";

const GeneralContent = () => {
  const LabeledInput = ({ label, children }) => {
    return (
      <GridLayers as="label" gap="s">
        {label}
        {children}
      </GridLayers>
    );
  };

  const Input = styled.input`
    border-radius: 0.25rem;
    border: 1px solid #d7cdcc;
    color: #303030;
    height: 30px;
  `;

  const SubLabel = styled.span`
    color: #605d5c;
    font-size: 0.75rem;
  `;

  return (
    <GridLayers>
      <Split gap="l" fraction="auto-end" responsive>
        <GridLayers>
          <LabeledInput label="Username">
            <Input />
          </LabeledInput>
          <LabeledInput label="About">
            <Input as="textarea" />
            <SubLabel>Write a few lines about yourself</SubLabel>
          </LabeledInput>
        </GridLayers>
        <Logo image={logoImg} size="10rem" border="1px solid #d7cdcc" />
      </Split>

      <GridColumns gap="l" columns={2}>
        <LabeledInput label="First Name">
          <Input />
        </LabeledInput>
        <LabeledInput label="Last Name">
          <Input />
        </LabeledInput>
        <LabeledInput label="Company">
          <Input />
        </LabeledInput>
        <LabeledInput label="Role">
          <Input />
        </LabeledInput>
      </GridColumns>
    </GridLayers>
  );
};
export default GeneralContent;
