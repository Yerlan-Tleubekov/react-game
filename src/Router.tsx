import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { PAGES } from "./dev-src/constants";
import GameProcess from "./dev-src/pages/gameProcess";
import MainPage from "./dev-src/pages/main/index";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Redirect exact from="/" to={PAGES.main} />
        <Route path={[PAGES.main, PAGES.gameProcess]}>
          <Route path={PAGES.main} component={MainPage} />
          <Route path={PAGES.gameProcess} component={GameProcess} />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Routes;
