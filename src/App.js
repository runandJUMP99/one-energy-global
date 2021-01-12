import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetInvolved from "./components/GetInvolved/GetInvolved";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar fixed={true} />
      <Suspense fallback="Loading...">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/getinvolved" component={GetInvolved} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
