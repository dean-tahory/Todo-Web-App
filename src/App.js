import React from "react";
import "./App.css";

import Button from "@material-ui/core/Button";
import Header from "./components/header/header.component";
import MainPage from "./pages/main-page/main-page.component";

function App() {
  return (
    <div className="App">
      <Header />

      <MainPage />
    </div>
  );
}

export default App;
