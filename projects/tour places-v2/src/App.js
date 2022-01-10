import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

import MyNav from "./components/MyNav";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    //<Header />
    //<Cards />
  );
}

export default App;
