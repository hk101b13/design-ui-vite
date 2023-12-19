import React from "react";
import { Switch, SwitchProps } from "antd";
import styled from "@emotion/styled";
import { Interpolation, Theme } from "@emotion/react";
import { useContext } from "react";
import { ThemeContext } from "./MThemeProvider";
import { AddImportantToStyles } from "./MThemeProvider";

export interface MSwitchProps {
  customStyle?: Interpolation<Theme>;
}

const StyledSwitch = styled(Switch)((props: MSwitchProps & SwitchProps) => {
  const { colorScheme } = useContext(ThemeContext);
  const baseStyle = {
    "&.ant-switch-checked": {
      backgroundColor: `${colorScheme?.accent || "pink"} !important`,
    },
    "&.ant-switch-checked .ant-switch-handle::before": {
      backgroundColor: `${colorScheme?.main || "#fff"}!important`,
    },
    "&.ant-switch-checked .ant-switch-loading-icon": {
      color: `${colorScheme?.text || "red"}!important`,
    },
    "& .ant-wave": {
      "--wave-color": `${colorScheme?.accent || "red"} !important`,
    },
  };
  const importantCustomStyle = AddImportantToStyles(props.customStyle);

  return [baseStyle, importantCustomStyle];
});

export const MSwitch = (props: SwitchProps & MSwitchProps) => {
  return <StyledSwitch {...props} />;
};
