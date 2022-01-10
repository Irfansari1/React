import "./App.css";
import Cards from "./components/cards/Cards";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
