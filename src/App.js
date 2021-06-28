import React, {useEffect, useState, Suspense} from "react";
import {useDispatch} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import firebaseConfig from "./services/firebase";

import About from "./components/About/About";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Membership from "./components/Membership/Membership";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/UI/SideDrawer/SideDrawer";
import Volunteer from "./components/Volunteer/Volunteer";

import {authCheckState} from "./store/actions/auth";

function App() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckState());
  }, [dispatch]);

  function handleShow() {
    setShow(prevValue => !prevValue);
  };

  return (
    <BrowserRouter>
      <Backdrop handleShow={handleShow} show={show} />
      <SideDrawer show={show} setShow={setShow} />
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
