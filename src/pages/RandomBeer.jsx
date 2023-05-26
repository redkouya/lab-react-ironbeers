import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import BeerDetails from "../components/BeerDetails";

function RandomBeer() {
  const [randomBeer,setRandomBeer]=useState()
  const [isLoading,setIsLoading]=useState(true)
  const navigate =useNavigate()
  const getData = async ()=>{

    setIsLoading(true)

    try{
        const response =await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        console.log(response.data)
        setRandomBeer(response.data)
        setIsLoading(false)
    }
    catch(err)
    {
      navigate("/error")
    }
  }

useEffect(()=>{
getData()
},[])

if(isLoading)
{
  return(
    <div className="container-spinner">
        <BounceLoader color="yellow" />
      </div>
  )
}

  return (
    <div className="container-center">
      <BeerDetails beerDetails={randomBeer} />
    </div>
  )
}

export default RandomBeer