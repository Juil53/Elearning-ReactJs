import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRouteHome } from "./Routes/route";
import Courses from './templateHome/Courses/Courses';
import PageNotFound from "./PageNotFound";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRouteHome()}
        <Route path="" component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
