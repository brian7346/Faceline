import React from "react";
import "./styles/App.scss";
import { Navbar, Landing, Footer } from "./components";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Landing />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
