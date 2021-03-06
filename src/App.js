import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/";
import Landing from "./components/Landing/";
import "./App.css";

function App() {
  const home = new Home();
  const landing = new Landing();

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={landing} />
        <Route exact path="/home" element={home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
