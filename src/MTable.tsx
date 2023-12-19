import React, { useContext } from "react";
import { Table, TableProps } from "antd";
import styled, { Interpolation } from "@emotion/styled";
import { Theme } from "@emotion/react";
import { ThemeContext, AddImportantToStyles } from "./MThemeProvider";
import MColors from "./Theme/MColors/MColors.json";

export interface TableColor {
  headerColor?: string;
  rowColor?: string;
  hoverRowColor?: string;
  textColor?: string;
}

export interface MTableProps {
  customStyle?: Interpolation<Theme>;
  tableColor?: TableColor;
}

function setTableColor(tableColor?: TableColor): TableColor {
  const { colorScheme } = useContext(ThemeContext);
  let newTableColor = {
    headerColor: MColors.schemes.light.primary,
    rowColor: MColors.schemes.light.onPrimaryContainer,
    hoverRowColor: MColors.schemes.light.primaryContainer,
    textColor: MColors.schemes.light.onPrimary,
  };
  if (colorScheme) {
    newTableColor = {
      headerColor: colorScheme.secondary || newTableColor.headerColor,
      rowColor: colorScheme.main || newTableColor.rowColor,
      hoverRowColor: colorScheme.accent || newTableColor.hoverRowColor,
      textColor: colorScheme.text || newTableColor.textColor,
    };
  }
  if (tableColor) {
    newTableColor = {
      headerColor: tableColor.headerColor || newTableColor.headerColor,
      rowColor: tableColor.rowColor || newTableColor.rowColor,
      hoverRowColor: tableColor.hoverRowColor || newTableColor.hoverRowColor,
      textColor: tableColor.textColor || newTableColor.textColor,
    };
  }
  return newTableColor;
}

const StyledTable = styled(Table)((props: MTableProps & TableProps<any>) => {
  const { fontSize, fontFamily } = useContext(ThemeContext);
  let tableColor = setTableColor(props.tableColor);
  const baseStyle = {
    color: "white",
    transition: "all 0.25s ease-in-out ",
    //   boxShadow: "2px 2px 5px 0px #AFB6B8",
    borderRadius: "8px",
    "& .ant-table-cell": {
      fontFamily: fontFamily || "",
      color: `${tableColor.textColor}`,
    },
    "& .ant-table-container": {
      backgroundColor: `${tableColor.rowColor}`,
    },
    "& .ant-table-cell-row-hover": {
      backgroundColor: `${tableColor.hoverRowColor} !important`,
    },
    "& .ant-table-thead .ant-table-cell": {
      backgroundColor: `${tableColor.headerColor}`,
    },
    "& .ant-table-thead .ant-table-cell::before": {
      backgroundColor: "black",
    },
    "&&.ant-spin &&.ant-spin-dot-item": { color: "red" },
    "& th": { fontSize: `${fontSize?.t3 || 18}px !important` },
    "& td": { fontSize: `${fontSize?.t4 || 18}px !important` },
  };

  const importantCustomStyle = AddImportantToStyles(props.customStyle);
  return [baseStyle, importantCustomStyle];
});

export const MTable = (props: MTableProps & TableProps<any>) => {
  return (
    <>
      <div style={{ width: "1000px" }}>
        <StyledTable
          tableColor={props.tableColor}
          pagination={false}
          {...props}
        />
      </div>
    </>
  );
};
