import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import BeerDetails from "../components/BeerDetails";

function SingleBeer() {
  const params = useParams();

  const [beerDetails, setBeerDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/" + params.id
      );
      console.log("RESP", response.data);
      setBeerDetails(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <div className="container-spinner">
        <BounceLoader color="yellow" />
      </div>
    );
  }

  return (
    <div className="container-center">
      <BeerDetails beerDetails={beerDetails} />
    </div>
  );
}

export default SingleBeer;
