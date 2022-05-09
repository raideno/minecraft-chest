import Home from "./routes/Home";
import Main from "./routes/Main";
import About from "./routes/About";
import Error from "./routes/Error";

import Navigation from "./components/Navigation";

import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    /*if you replace <> with <div> be carful to add a layout styling and make it's height to 100%*/
    <>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/try-it" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
