import React from 'react';
import './App.style.scss';
import Layout, {Theme} from "./components/layout/Layout";

function App() {


  return (
    <div className="App">
        <div>
            <Layout theme={Theme.light}><div>---</div> </Layout>
        </div>
    </div>
  );
}

export default App;
