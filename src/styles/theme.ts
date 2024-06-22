import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      primaryBgColor: {
        default: "#f0f0f0",
        _dark: "#0a192f",
      },
      secondaryBgColor: {
        default: "#ffffff",
        _dark: "#112240",
      },
      primaryHeading: {
        default: "#4d5766",
        _dark: "#ccd6f6",
      },
      subText: {
        default: "#6e7682",
        _dark: "#8892b0",
      },
      highlightColor: {
        default: "#26bf65",
        _dark: "#64ffda",
      },
      borderColor: {
        default: "#9c9c9c",
        _dark: "#a8b2d1",
      },
    },
  },
  styles: {
    global: {
      "html,body": {
        background: "primaryBgColor",
      },
    },
  },
  config: config,
});
