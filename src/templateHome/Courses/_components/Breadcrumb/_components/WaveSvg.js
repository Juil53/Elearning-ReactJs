import React from "react";
import { Box, SvgIcon } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Tạo svg image
function WaveSvgComp(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        style={{ stroke: "none", fill: "#fff" }}
      ></path>
    </SvgIcon>
  );
}

const theme = createTheme({
  breakpoints: {
    values: {
      waveSvgSm: 568.05,
      waveSvgMd: 768.05,
    },
  },
});

export default function WaveSvg() {
  const styles = {
    waveWrapper: {
      position: "relative",
      width: "100%",
      marginTop: "-100px",
      zIndex: 1,
      height: 150,
      [theme.breakpoints.down("waveSvgMd")]: {
        height: 100,
      },
      [theme.breakpoints.down("waveSvgSm")]: {
        height: 80,
        marginTop: "-80px",
      },
    },
  };

  return (
    <ThemeProvider>
      <Box sx={styles.waveWrapper}>
        <WaveSvgComp
          viewBox="0 0 500 150"
          sx={{ width: "100%", height: "100%" }}
          preserveAspectRatio="none"
        />
      </Box>
    </ThemeProvider>
  );
}
