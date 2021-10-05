import React from 'react';
import './App.style.scss';
import Layout, {Theme} from "./components/layout/Layout";

import Notepad from "./pages/Notepad";
import Dashboard from "./pages/Dashboard";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Router>
        <div className="App">
            <Layout theme={Theme.light}>
                <Switch>
                    <Route exact path={'/'} component={Notepad} />
                    <Route  path={'/dashboard'} component={Dashboard} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </div>
      </Router>
  );
}

export default App;
