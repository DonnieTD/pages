import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fallback } from "./Fallback";

const App = () => (
  <Suspense fallback={<Fallback />}>
    <Router>
      <Switch>
        <Route
          path="/login"
          component={React.lazy(() => import("./unauthenticated-app"))}
        />
        <Route
          exact
          path="/"
          component={React.lazy(() => import("./authenticated-app"))}
        />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
