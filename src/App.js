import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

// CSS
import "./css/style.css";

import Home from "./pages/Home.js";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
