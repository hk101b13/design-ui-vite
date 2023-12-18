import { ReactNode } from "react";
import { TableProps, SwitchProps } from "antd";
import { CustomTableProps } from "./Components/QTable";
import { CustomSwitchProps } from "./Components/QSwitch";
import { QButtonProps } from "./Components/QButton";
import { QThemeProviderProps } from "./Components/QThemeProvider";

declare const QTable: (
  props: CustomTableProps & TableProps<any>
) => JSX.Element;

declare const QSwitch: (props: SwitchProps & CustomSwitchProps) => JSX.Element;

declare const QThemeProvider: (props: QThemeProviderProps) => JSX.Element;

declare const QButton: React.ForwardRefExoticComponent<
  QButtonProps & React.RefAttributes<any>
>;

export { QTable, QSwitch, QThemeProvider, QButton };
