import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  renderRouteAdmin,
  renderRouteHome,
  renderRouteLogin,
} from "./Routes/route";
import { Suspense } from "react";
import { useStyles } from "./styles/styles";
import PageNotFound from "./PageNotFound";
import Loading from "./_components/Loading/Loading";

function App() {
  const classes = useStyles();
  return (
    <Suspense
      fallback={
        <div className={classes.Loading}>
          <Loading />
        </div>
      }
    >
      <BrowserRouter>
        <Switch>
          {renderRouteLogin()}
          {renderRouteAdmin()}
          {renderRouteHome()}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
