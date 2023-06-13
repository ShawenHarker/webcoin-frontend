const container = {
  display: 'flex',
  padding: "10px, auto",
  margin: "10px",
  flexDirection: 'column',
};

const flexRow = {
  flexDirection: 'row'
}

const color = {
  primary: {
    color: "#6258de",
  },
  secondary: {
    color: "#ff9100",
  },
};

const fontsizes = {
  xs: {
    fontSize: "16px",
  },
  s: {
    fontSize: "18px",
  },
  m: {
    fontSize: "22px",
  },
  l: {
    fontSize: "24px",
  },
  xl: {
    fontSize: "26px",
  },
};

const theme = {
  container,
  fontsizes,
  flexRow,
  color
};

export { theme };