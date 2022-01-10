import "./App.css";
import Cards from "./components/cards/Cards";
import MyNav from "./components/navbar/MyNav";
import Header from "./components/header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Home />
      <MyNav />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
