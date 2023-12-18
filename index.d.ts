declare module "design-ui-vite" {
  import { TableProps } from "antd";
  import styled, { Interpolation } from "@emotion/styled";
  import { Theme } from "@emotion/react";
  import { SwitchProps } from "antd";
  import { ReactNode } from "react";

  export interface TableColor {
    headerColor?: string;
    rowColor?: string;
    hoverRowColor?: string;
    textColor?: string;
  }

  export interface CustomTableProps {
    customStyle?: Interpolation<Theme>;
    tableColor?: TableColor;
  }

  export interface CustomSwitchProps {
    customStyle?: Interpolation<Theme>;
  }

  export interface QButtonProps {
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

  export interface QThemeProviderProps {
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

  const QTable: React.FC<CustomTableProps & TableProps<any>>;
  const QSwitch: React.FC<CustomSwitchProps & SwitchProps>;
  const QButton: React.FC<QButtonProps>;
  const QThemeProvider: React.FC<QThemeProviderProps>;

  export { QTable, QButton, QSwitch, QThemeProvider };
}
