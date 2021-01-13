import React, {Suspense, useState} from "react";
import {Route, Switch} from "react-router-dom";

import About from "./components/About/About";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetInvolved from "./components/GetInvolved/GetInvolved";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import SideDrawer from "./components/UI/SideDrawer/SideDrawer";

function App() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(prevValue => !prevValue);
  }

  return (
    <div className="App">
      <Backdrop handleShow={handleShow} show={show} />
      <SideDrawer handleShow={handleShow} show={show} />
      <Navbar fixed={true} handleShow={handleShow} />
      <Navbar fixed={false} handleShow={handleShow} />
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
