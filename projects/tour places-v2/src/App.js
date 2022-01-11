import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Team from "./pages/Team";
import Vlog from "./pages/Vlog";
import World from "./pages/World";
import Europe from "./pages/Europe";
import Asia from "./pages/Asia";
import TeamDetail from "./pages/TeamDetail";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/vlog" element={<Vlog />} />
        <Route path="/world" element={<World />} />
        <Route path="/europe" element={<Europe />} />
        <Route path="/asia" element={<Asia />} />
        <Route path="/team/:login" element={<TeamDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    //<Header />
    //<Cards />
  );
}

export default App;
