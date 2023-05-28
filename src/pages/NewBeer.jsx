import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";

function NewBeer() {
  const [isShowing, setIsShowing] = useState(false);
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  }); //para cuando son muchos campos

  const handleNameChange = (e) =>
    setFormInputs({ ...formInputs, name: e.target.value });
  const handleTaglineChange = (e) =>
    setFormInputs({ ...formInputs, tagline: e.target.value });
  const handleDescriptionChange = (e) =>
    setFormInputs({ ...formInputs, description: e.target.value });
  const handleFirstBrewedChange = (e) =>
    setFormInputs({ ...formInputs, first_brewed: e.target.value });
  const handleBrewTipChange = (e) =>
    setFormInputs({ ...formInputs, brewers_tips: e.target.value });
  const handleAttenuationChange = (e) =>
    setFormInputs({ ...formInputs, attenuation_level: e.target.value });
  const handleContributedChange = (e) =>
    setFormInputs({ ...formInputs, contributed_by: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsShowing(true);
    try {
      console.log("formInputs", formInputs);
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        { ...formInputs }
      );
      setIsShowing(false);
      console.log(response);
    } catch (err) {
      navigate("/error");
    }
  };

  if (isShowing) {
    return (
      <div className="container-spinner">
        <BounceLoader color="yellow" />
      </div>
    );
  }

  return (
    <div className="container-center">
    <div className="form-new-beer">
      <form onSubmit={handleSubmit}>
      <div className="label-input">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formInputs.name}
          onChange={handleNameChange}
        />
       </div>
       <div className="label-input">
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          id="routes-container"
          value={formInputs.tagline}
          onChange={handleTaglineChange}
        />
        </div>
        <div className="label-input">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          style={{ resize: "none" }}
          value={formInputs.description}
          onChange={handleDescriptionChange}
        ></textarea>
       </div>
       <div className="label-input">
        <label htmlFor="first_brewed ">First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          value={formInputs.first_brewed}
          onChange={handleFirstBrewedChange}
        />
       </div>
       <div className="label-input">
        <label htmlFor="brewers_tips">Brewers tips</label>
        <input
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          value={formInputs.brewers_tips}
          onChange={handleBrewTipChange}
        />
         </div>
         <div className="label-input">
        <label htmlFor="attenuation_level">Attenuation level</label>
        <input
          type="number"
          name="attenuation_level"
          id="attenuation_level"
          value={formInputs.attenuation_level}
          onChange={handleAttenuationChange}
        />
       </div>
       <div className="label-input">
        <label htmlFor="contributed_by">Contributed by</label>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          value={formInputs.contributed_by}
          onChange={handleContributedChange}
        />
        </div>
        <div className="submit-btn">
        <button type="submit" disabled={isShowing}>
          Añadir
        </button>
        </div>
       
      </form>
    </div>
    </div>
  );
}

export default NewBeer;
