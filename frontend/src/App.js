import React, { useEffect } from "react";
import { Route } from "react-router";
import HomePage from "./components/HomePage";
import FlashCardPage from "./components/cards/FlashCardPage";
import ConclusionPage from "./components/ConclusionPage";
import Footer from "./components/Footer";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";

ReactGA.initialize("UA-192318099-1");

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <div className="App">
      <Route exact path={"/"} component={HomePage} />
      <Route exact path={"/cards"} component={FlashCardPage} />
      <Route exact path={"/conclusion"} component={ConclusionPage} />
      <Footer />
    </div>
  );
}

export default App;
