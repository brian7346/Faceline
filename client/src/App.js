import React from "react";
import "./styles/App.scss";
import { Navbar, Landing, Footer } from "./components";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
