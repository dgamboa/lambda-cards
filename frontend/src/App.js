import React from "react";
import { Route } from "react-router";
import HomePage from "./components/HomePage";
import FlashCard from "./components/FlashCard";
import ConclusionPage from "./components/ConclusionPage";

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={HomePage}/>
      <Route exact path={"/cards"} component={FlashCard}/>
      <Route exact path={"/conclusion"} component={ConclusionPage}/>
    </div>
  );
}

export default App;
