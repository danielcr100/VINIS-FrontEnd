import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import MainPage from "./container/MainPage";

function App() {
  return (
    <div>
      <NavBar /> <MainPage />;
    </div>
  );
}

export default App;
