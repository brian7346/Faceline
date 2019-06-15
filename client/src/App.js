import React, { useContext } from "react";
import "./styles/App.scss";
import { Navbar, Landing, Footer } from "./components";
import { StateProvider, StateContext } from "./context/Context";

function App() {
  return (
    <StateProvider>
      <div className="App">
        <Navbar />
        <Landing />
        <Footer />
      </div>
    </StateProvider>
  );
}

export default App;
