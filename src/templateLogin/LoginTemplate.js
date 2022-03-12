import React from "react";
import { Route } from "react-router-dom";
import { theme } from "../styles/styles";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Layout from "../_components/Layout/Layout";
import { useStyles } from "../styles/styles";

export default function LoginTemplate(props) {
  const classes = useStyles()
  const { exact, path, component } = props;
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <div className={classes.sliderLogin}>
            <Route exact={exact} path={path} component={component} />
          </div>
        </Layout>
      </ThemeProvider>
    </>
  );
}
