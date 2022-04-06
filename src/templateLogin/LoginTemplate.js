import React from "react";
import { Route } from "react-router-dom";
import { theme } from "../styles/styles";
import { ThemeProvider } from "@mui/material";
import { useStyles } from "../styles/styles";
import Layout from "../_components/Layout/Layout";
import Navbar from "../_components/Header/HomeHeader/Navbar";

export default function LoginTemplate(props) {
  const classes = useStyles();
  const { exact, path, component } = props;
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Navbar />
          <div className={classes.sliderLogin}>
            <Route exact={exact} path={path} component={component} />
          </div>
        </Layout>
      </ThemeProvider>
    </>
  );
}
