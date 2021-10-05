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

function App() {
  return (
      <Router>
    <div className="App">
            <Layout theme={Theme.light}>
                <Switch>
                    <Route exact path={'/'} component={Notepad} />
                    <Route exact path={'/dashboard'} component={Dashboard} />
                </Switch>
            </Layout>
    </div>

      </Router>
  );
}

export default App;
