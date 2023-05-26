import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";

function BeersList() {
  const [beers, setBeers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response.data);
      setBeers(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading ) { //! xq  funciona solo a veces?
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
          <Link to={"/beer/" + eachBeer._id}>
            <div className="beer-card">
              <img src={eachBeer.image_url} alt={eachBeer.name} />
              <h3>{eachBeer.name}</h3>
              <h5>{eachBeer.tagline}</h5>
            </div>
          </Link>
        );
      })} 
    </div>
  );
}

export default BeersList;
