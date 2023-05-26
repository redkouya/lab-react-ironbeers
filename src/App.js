import "./App.css";
import NavbarHome from "./components/NavbarHome.jsx";
import BeersList from "./pages/BeersList";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavbarHome />
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
