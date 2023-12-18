import React from "react";
import { createContext } from "react";
import i18next, { TFunction } from "i18next";
import { Interpolation, Theme } from "@emotion/react";
import { I18nextProvider } from "react-i18next";

interface ThemeContextType {
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
  fontFamily?: string;
  t?: TFunction;
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

export const AddImportantToStyles = (styles: any) => {
  if (!styles) {
    return {};
  }

  const importantStyles: any = {};
  Object.keys(styles).forEach((key) => {
    if (typeof styles[key] === "object") {
      importantStyles[key] = AddImportantToStyles(styles[key]);
      return;
    }

    if (styles[key].includes("!important")) {
      importantStyles[key] = styles[key];
    } else {
      importantStyles[key] = `${styles[key]} !important`;
    }
  });
  return importantStyles;
};

export const ThemeContext = createContext<ThemeContextType>({
  colorScheme: { text: "", main: "", secondary: "", accent: "" },
});

export default (props: QThemeProviderProps) => {
  const contextValue: ThemeContextType = {
    colorScheme: props.colorScheme,
    locale: props.locale,
    size: props.size,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
  };

  const { children, localeBundle, locale } = props;

  const newI18n: any = i18next.createInstance();

  let resources: { [key: string]: { [key: string]: any } } = {};

  if (localeBundle && localeBundle.length > 0) {
    localeBundle.forEach((item) => {
      resources[item.lng] = { [item.ns]: item.resources };
    });
  }

  newI18n.init({
    resources,
    lng: locale,
    fallbackLng: locale,
    interpolation: {
      escapeValue: false,
    },
  });

  return (
    <div>
      <ThemeContext.Provider value={contextValue}>
        <I18nextProvider i18n={newI18n}>{children}</I18nextProvider>
      </ThemeContext.Provider>
    </div>
  );
};
