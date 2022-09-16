import React from "react";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { ToggleProps, scales } from "./types";

const Toggle: React.FC<ToggleProps> = ({ checked, scale = scales.MD, ...props }) => {
  const isChecked = !!checked;

  return (
    <StyledToggle checked={isChecked} scale={scale}>
      <Input checked={checked} scale={scale} {...props} type="checkbox" />
      <Handle scale={scale} />
    </StyledToggle>
  );
};

Toggle.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  scale: scales.MD,
};

export default Toggle;
