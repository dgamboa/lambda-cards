import React from "react";
import { Route } from "react-router";
import FlashCard from "./components/FlashCard";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={HomePage}/>
      <Route exact path={"/cards"} component={FlashCard}/>
    </div>
  );
}

export default App;
