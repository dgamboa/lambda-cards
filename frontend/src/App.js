import React, { useEffect } from "react";
import { Route } from "react-router";
import HomePage from "./components/HomePage";
import FlashCardPage from "./components/cards/FlashCardPage";
import ConclusionPage from "./components/ConclusionPage";
import Footer from "./components/Footer";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

ReactGA.initialize("UA-192318099-1");
const browserHistory = createBrowserHistory();
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search)
})

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
