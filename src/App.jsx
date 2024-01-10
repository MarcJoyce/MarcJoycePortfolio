import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";

import { Home, SWG } from './components';

const App = () => {
  const TRACKING_ID = "UA-222888625-2";

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SWG" element={<SWG />} />
      </Routes>
    </Router>
  );
};

export default App;
