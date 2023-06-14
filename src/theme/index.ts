import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      "50": "#EBEAFB",
      "100": "#C7C3F3",
      "200": "#A39DEC",
      "300": "#7F77E4",
      "400": "#5B50DC",
      "500": "#372AD5",
      "600": "#2C22AA",
      "700": "#211980",
      "800": "#161155",
      "900": "#0B082B",
    },
    secondary: {
      "50": "#FFF4E5",
      "100": "#FFE0B8",
      "200": "#FFCC8A",
      "300": "#FFB95C",
      "400": "#FFA52E",
      "500": "#FF9100",
      "600": "#CC7400",
      "700": "#995700",
      "800": "#663A00",
      "900": "#331D00",
    },
  },
});

export { theme };
