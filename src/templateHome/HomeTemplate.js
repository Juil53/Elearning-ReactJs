import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { theme } from "../styles/styles";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";

export default function HomeTemplate(props) {
  const { exact, path, component } = props;
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Route exact={exact} path={path} component={component} />
      </ThemeProvider>
    </>
  );
}
