import { Link } from "react-router-dom";
function BeerCard({eachBeer}) {
  return (
    <Link to={"/beer/" + eachBeer._id}>
    <div className="beer-card">
      <img src={eachBeer.image_url} alt={eachBeer.name} />
      <h3>{eachBeer.name}</h3>
      <h5 className="tagline">{eachBeer.tagline}</h5>
      <p>Created by: {eachBeer.contributed_by}</p>
    </div>
  </Link>
  )
}

export default BeerCard