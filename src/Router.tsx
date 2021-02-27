import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { PAGES } from "./dev-src/constants";
import MainPage from "./dev-src/pages/main/index";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Redirect exact from="/" to={PAGES.main} />
        <Route path={[PAGES.main, PAGES.gameProcess]}>
          <Route path={PAGES.main} component={MainPage} />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Routes;
