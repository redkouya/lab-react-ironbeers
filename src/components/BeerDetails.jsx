
function BeerDetails({beerDetails}) {
  return (
    <div className="single-card">
        <img src={beerDetails.image_url} alt={beerDetails.name} />
        <h2>{beerDetails.name}</h2>
        <h3 className="tagline">{beerDetails.tagline}</h3>
        <h5>Brewer Tips</h5>
        <p>{beerDetails.description}</p>
    </div>
  )
}

export default BeerDetails