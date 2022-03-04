import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRouteHome } from "./Routes/route";
import { Suspense } from "react";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>{renderRouteHome()}</Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
