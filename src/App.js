import React, {Suspense, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import About from "./components/About/About";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Membership from "./components/Membership/Membership";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/UI/SideDrawer/SideDrawer";
import Volunteer from "./components/Volunteer/Volunteer";

function App() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(prevValue => !prevValue);
  };

  return (
    <BrowserRouter>
      <Backdrop handleShow={handleShow} show={show} />
      <SideDrawer handleShow={handleShow} show={show} />
      <Navbar fixed={true} handleShow={handleShow} />
      <Navbar fixed={false} handleShow={handleShow} />
      <Suspense fallback="Loading...">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/membership" component={Membership} />
        <Route path="/volunteer" component={Volunteer} />
      </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
