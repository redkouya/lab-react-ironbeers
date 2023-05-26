import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";
function Navbar() {
  return (
    <nav>
      <Link to="/beers">
        <div>
          <img src={beersImg} alt="beers" />
          <h3>All Beers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </Link>
      <Link to="/new-beer">
        <div>
          <img src={newBeerImg} alt="new-beer" />
          <h3>New Beer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </Link>
      <Link to="/random-beer">
        <div>
          <img src={randomBeerImg} alt="random-beer" />
          <h3>Random Beer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
