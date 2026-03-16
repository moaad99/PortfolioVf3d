import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, StarsCanvas } from "./components";

const SectionLoader = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <span className="canvas-loader" />
  </div>
);

// Lazy-load below-the-fold sections for faster initial load
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
          <StarsCanvas />
        </div>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Tech />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Works />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Feedbacks />
        </Suspense>
        <div className="relative z-0">
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
