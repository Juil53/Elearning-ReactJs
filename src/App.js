import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRouteHome } from "./Routes/route";
import PageNotFound from "./PageNotFound";
import { Suspense } from "react";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
    {renderRouteHome()}
  <Route path="" component={PageNotFound}/>
  </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
