import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout, {ThemeEnum} from "./components/layout/Layout";
import {Paths} from "./config/enum/Paths";
import NotFound from "./pages/NotFound";
import Notepad from "./pages/Notepad";
import Dashboard from "./pages/Dashboard";

const Routes: React.FC = () => {
  return (
      <Layout theme={ThemeEnum.light}>
          <Switch>
              <Route exact path={Paths.HOME_PAGE} component={Notepad} />
              <Route exact path={Paths.DASHBOARD} component={Dashboard} />
              <Route component={NotFound} />
          </Switch>
      </Layout>
  );
};

export default Routes;
