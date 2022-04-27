import React from "react";
 
import {
  BrowserRouter,
  HashRouter,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import { withRouter } from "react-router";
import WelcomePage from "./pages/welcomepage";
import LoginPage from "./pages/loginpage";

function App() {
  return (
    <BrowserRouter>

                <Switch>
                  <Route exact path="/" component={LoginPage} />
                  <Route path="/welcome" component={WelcomePage} />
                </Switch>
    </BrowserRouter>
  );
}

export default App;
