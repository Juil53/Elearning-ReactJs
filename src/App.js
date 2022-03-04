import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRouteHome } from "./Routes/route";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRouteHome()}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
