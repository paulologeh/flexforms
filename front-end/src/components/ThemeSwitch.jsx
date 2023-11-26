import React from "react";
import { Radio, Segment } from "semantic-ui-react";

export const ThemeSwitch = ({ darkState, handleThemeChange }) => {
  return (
    <Segment compact>
      <Radio
        label="Dark Mode"
        slider
        checked={darkState}
        onChange={handleThemeChange}
      ></Radio>
    </Segment>
  );
};
