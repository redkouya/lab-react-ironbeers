import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import BeerCard from "../components/BeerCard";
function BeersList() {
  const [beers, setBeers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate =useNavigate()

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
    //  console.log(response.data);
      setBeers(response.data);
      setIsLoading(false);
    } catch (err) {
      navigate("/error")
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading ) { 
    return (
      <div className="container-spinner">
        <BounceLoader color="yellow" />
      </div>
    )
  }

  return (
    <div className="beer-list-container">
       {beers.map((eachBeer) => {
        return (
          <BeerCard key={eachBeer._id} eachBeer={eachBeer}/>
          
        );
      })} 
    </div>
  );
}

export default BeersList;
