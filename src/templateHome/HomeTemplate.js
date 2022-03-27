import React from "react";
import { Route } from "react-router-dom";
import { theme } from "../styles/styles";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Layout from "../_components/Layout/Layout";
import Navbar from "../_components/Header/HomeHeader/Navbar";

export default function HomeTemplate(props) {
  const { exact, path, component } = props;
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Navbar/>
          <Route exact={exact} path={path} component={component} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
