import "./App.css";
import NavbarHome from "./components/NavbarHome.jsx";
import BeersList from "./pages/BeersList";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import SingleBeer from "./pages/SingleBeer";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      <NavbarHome />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
         <Route path="/beer/:id" element={<SingleBeer />} /> 


         <Route path="/error" element={<Error />} /> 
         <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default App;
