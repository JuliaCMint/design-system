import { Button } from "./Button";
import { InlineFlexContainer } from "./patterns/InlineFlexContainer";

const FormButtons = () => {
  return (
    <InlineFlexContainer gap="m" justify="flex-end">
      <Button>Cancel</Button>
      <Button primary>Save</Button>
    </InlineFlexContainer>
  );
};

export default FormButtons;
