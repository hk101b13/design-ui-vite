declare module "design-ui-vite" {
  import React from "react";
  import { TableProps } from "antd";
  import styled, { Interpolation } from "@emotion/styled";
  import { Theme } from "@emotion/react";
  import { SwitchProps } from "antd";
  import { ReactNode } from "react";

  export interface MTableColor {
    headerColor?: string;
    rowColor?: string;
    hoverRowColor?: string;
    textColor?: string;
  }

  export interface MTableProps {
    customStyle?: Interpolation<Theme>;
    tableColor?: MTableColor;
  }

  export interface MSwitchProps {
    customStyle?: Interpolation<Theme>;
  }

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

  export interface MThemeProviderProps {
    colorScheme?: {
      text?: string;
      main?: string;
      secondary?: string;
      accent?: string;
    };
    fontSize?: {
      t1?: number;
      t2?: number;
      t3?: number;
      t4?: number;
      t5?: number;
    };
    size?: "small" | "middle" | "large";
    locale?: string;
    localeBundle?: { lng: string; ns: "translation"; resources: any }[];
    children: any;
    fontFamily?: string;
  }

  const QTable: React.FC<MTableProps & TableProps<any>>;
  const QSwitch: React.FC<MSwitchProps & SwitchProps>;
  const QButton: React.FC<MButtonProps>;
  const QThemeProvider: React.FC<MThemeProviderProps>;

  export { QTable, QButton, QSwitch, QThemeProvider };
}
