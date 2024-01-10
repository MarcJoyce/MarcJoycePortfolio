import React, { Suspense } from "react";

const Home = () => {

    const About = React.lazy(() => import("./About"));
    const Contact = React.lazy(() => import("./Contact"));
    const Experience = React.lazy(() => import("./Experience"));
    const Hero = React.lazy(() => import("./Hero"));
    const Navbar = React.lazy(() => import("./Navbar"));
    const Tech = React.lazy(() => import("./Tech"));
    const Works = React.lazy(() => import("./Works"));
    const StarsCanvas = React.lazy(() => import("./canvas/Stars"));

    return (
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
    )
}

export default Home;