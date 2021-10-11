import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout, {ThemeEnum} from "./components/layout/Layout";
import {Paths} from "./config/enum/Paths";
import NotFound from "./pages/NotFound";
import Notepad from "./pages/Notepad";
import Home from "./pages/Home";
import Index from "./modules/Charts/containers";

const Routes: React.FC = () => {
  return (
      <Layout theme={ThemeEnum.light}>
          <Switch>
              <Route exact path={Paths.HOME_PAGE} component={Home} />
              <Route exact path={Paths.CREATE_NOTEPAD} component={Notepad}/>
              <Route exact path={Paths.NOTEPAD_BY_ID} component={Notepad} />
              <Route exact path={Paths.CHARTS} component={Index} />
              <Route component={NotFound} />
          </Switch>
      </Layout>
  );
};

export default Routes;
