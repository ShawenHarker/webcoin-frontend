import { theme } from "../theme";

const cardStyle = {
  p: 4,
  mx: 2,
  mt: 4,
  maxWidth: 385,
  height: 240,
  borderRadius: 20
};

const flexRowStyle = {
  fontSize: 10,
  justifyContent: "space-evenly",
  pt: 3,
};

const fontStyle = {
  fontWeight: 800,
  fontFamily: "sans-serif",
};

const button = {
  backgroundColor: "primary.400",
  color: "secondary.500",
  marginTop: 15,
  ":hover": {
    backgroundColor: "secondary.500",
    color: "primary.400",
  },
};

const tableHeaderStyle = {
  color: "primary.400",
  fontSize: 16,
  pb: 4 
}

export const styles = {
  cardStyle,
  flexRowStyle,
  fontStyle,
  button,
  tableHeaderStyle
};
