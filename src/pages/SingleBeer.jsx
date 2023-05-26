import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";

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
      <div className="single-card">
        <img src={beerDetails.image_url} alt={beerDetails.name} />
        <h2>{beerDetails.name}</h2>
        <h3 className="tagline">{beerDetails.tagline}</h3>
        <h5>Brewer Tips</h5>
        <p>{beerDetails.description}</p>
      </div>
    </div>
  );
}

export default SingleBeer;
