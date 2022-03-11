import React from "react";
import { Route } from "react-router-dom";

export default function LoginTemplate(props) {
  const { exact, path, component } = props;
  return (
    <>
      <Route exact={exact} path={path} component={component} />
    </>
  );
}
