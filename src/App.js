import "./App.css";
import React from "react";
import Header from "./components/Header";
import Post from "./components/Post"
import Content from "./components/Content";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/react-project" element={<Post />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
