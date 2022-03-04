import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRouteHome } from "./Routes/route";
import Courses from './templateHome/Courses/Courses';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRouteHome()}
        <Courses />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
