import React, { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

const App = () => {
  const TRACKING_ID = "UA-222888625-2";

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const About = React.lazy(() => import('./components/About'));
  const Contact = React.lazy(() => import('./components/Contact'));
  const Experience = React.lazy(() => import('./components/Experience'));
  const Hero = React.lazy(() => import('./components/Hero'));
  const Navbar = React.lazy(() => import('./components/Navbar'));
  const Tech = React.lazy(() => import('./components/Tech'));
  const Works = React.lazy(() => import('./components/Works'));
  const StarsCanvas = React.lazy(() => import('./components/canvas/Stars'));

  return (
    <BrowserRouter>
    <Suspense fallback={<></>}>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      </Suspense>
      </BrowserRouter>
  )
}

export default App;