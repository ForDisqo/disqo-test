import React from 'react';
import './App.style.scss';
import Layout, {Theme} from "./components/layout/Layout";

function App() {


  return (
    <div className="App">
        <div>
            <Layout theme={Theme.light}><div>---</div> </Layout>
        </div>


        <div className="container">
            <div className="row">
                <div className="col-sm">
                    One of three columns
                </div>
                <div className="col-sm">
                    One of three columns
                </div>
                <div className="col-sm">
                    One of three columns
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
