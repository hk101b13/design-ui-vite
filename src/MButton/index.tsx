import React, { CSSProperties, ReactNode } from "react";
import { useContext } from "react";
import styled from "@emotion/styled";
import { AddImportantToStyles } from "../MThemeProvider";
import { Interpolation, Theme } from "@emotion/react";
import { ThemeContext } from "../MThemeProvider";
import { Button, ButtonProps } from "antd";
import MColors from "../Theme/MColors/MColors.json";

export interface MButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
  qType?: string;
  qSize?: string;

  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  customStyle?: Interpolation<Theme>;
}

//hard to connect to component color
interface MButtonColor {
  background: string;
  onHoverBackground: string;
  onActiveWave: string;
  text: string;
  shadow: string;
}

interface MButtonLayout {
  padding: string;
}

function SetButtonLayout(size: string | undefined): MButtonLayout {
  let buttonLayout = { padding: "10px 20px" };
  switch (size) {
    case "large":
      buttonLayout.padding = "16px 32px";
      break;
    case "middle":
      buttonLayout.padding = "8px 16px";
      break;
    case "small":
      buttonLayout.padding = "4px 8px";
      break;
  }
  return buttonLayout;
}

function SetButtonColors(qType?: string): MButtonColor {
  const { colorScheme } = useContext(ThemeContext);
  let buttonColor: MButtonColor;
  buttonColor = {
    background: MColors.palettes.primary[50],
    onHoverBackground: MColors.palettes.primary[60],
    onActiveWave: MColors.schemes.light.primaryFixedDim,
    text: MColors.schemes.light.onPrimary,
    shadow: MColors.schemes.light.shadow,
  };

  if (colorScheme) {
    buttonColor = {
      background: colorScheme.main || buttonColor.background,
      onHoverBackground: colorScheme.secondary || buttonColor.onHoverBackground,
      onActiveWave: colorScheme.accent || buttonColor.onActiveWave,
      shadow: colorScheme.accent || buttonColor.shadow,
      text: colorScheme.text || buttonColor.text,
    };
  }

  switch (qType) {
    case "info" || "success":
      buttonColor = {
        background: MColors.palettes.primary[50],
        onHoverBackground: MColors.palettes.primary[60],
        onActiveWave: MColors.schemes.light.primaryFixedDim,
        text: MColors.schemes.light.onPrimary,
        shadow: MColors.schemes.light.shadow,
      };
      break;

    case "warning":
      buttonColor = {
        background: MColors.palettes.warning[50],
        onHoverBackground: MColors.palettes.warning[60],
        onActiveWave: MColors.schemes.light.warningFixedDim,
        text: MColors.schemes.light.onWarning,
        shadow: MColors.schemes.light.shadow,
      };
      break;

    case "error":
      buttonColor = {
        background: MColors.palettes.error[50],
        onHoverBackground: MColors.palettes.error[60],
        onActiveWave: MColors.schemes.light.errorFixedDim,
        text: MColors.schemes.light.onError,
        shadow: MColors.schemes.light.shadow,
      };
      break;
  }
  return buttonColor;
}

const StyledButton = styled(Button)<
  ButtonProps & {
    qType?: string;
    qSize?: string;
    customStyle?: Interpolation<Theme>;
  }
>((props) => {
  const { fontSize, fontFamily, size } = useContext(ThemeContext);
  let buttonColor = SetButtonColors(props.qType);
  let buttonLayout = SetButtonLayout(size || props.qSize);

  const baseStyles = {
    width: "auto",
    height: "auto",
    padding: buttonLayout.padding,
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    boxShadow: `2px 2px 5px 0px ${buttonColor.shadow}`,
    transition: "all 0.25s ease-in-out",
    marginLeft: "10px",
    backgroundColor: `${buttonColor.background}`,
    fontSize: `${fontSize?.t3 || 14}px`,
    color: `${buttonColor.text}`,
    fontFamily: fontFamily,
    "&:not(.ant-btn-loading):hover": {
      color: "white !important",
      backgroundColor: `${buttonColor.onHoverBackground}`,
    },
    "& .ant-wave": {
      "--wave-color": `${buttonColor.onActiveWave} !important`,
    },
    "&.ant-btn-loading": { cursor: "not-allowed" },
  };
  const importantCustomStyles = AddImportantToStyles(props.customStyle);
  return [baseStyles, importantCustomStyles];
});

export default React.forwardRef<any, MButtonProps>((props, ref) => {
  return (
    <div>
      <StyledButton
        className={props.className}
        ref={ref}
        onClick={props.onClick}
        disabled={props.disabled}
        loading={props.loading}
        style={props.style}
        qType={props.qType}
        customStyle={props.customStyle}
        qSize={props.qSize}
      >
        {props.children}
      </StyledButton>
    </div>
  );
});
