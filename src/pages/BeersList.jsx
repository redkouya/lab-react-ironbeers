import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import BeerCard from "../components/BeerCard";
function BeersList() {
  const [beers, setBeers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");

  const getData = async (value) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/search?q=" + value
      );
      //  console.log(response.data);
      setBeers(response.data);
      setIsLoading(false);
    } catch (err) {
      navigate("/error");
    }
  };

  const handleSearchChange = (e) => {
    setInputSearch(e.target.value);
    getData(e.target.value);
  };
  useEffect(() => {
    getData(inputSearch);
  }, []);

  useEffect(() => {
    getData(inputSearch);
  }, [inputSearch]);

  return (
    <div className="container">
      <div className="search-bar-container">
        <h4>Search Beer</h4>
        <div className="search-bar">
          <input
            type="text"
            onChange={handleSearchChange}
            value={inputSearch}
            autoFocus
          />
        </div>
      </div>
      {isLoading && (
        <div className="container-spinner">
          <BounceLoader color="yellow" />
        </div>
      )}

      {isLoading || (
        <div className="beer-list-container">
          {beers.map((eachBeer) => {
            return <BeerCard key={eachBeer._id} eachBeer={eachBeer} />;
          })}
        </div>
      )}
    </div>
  );
}

export default BeersList;
