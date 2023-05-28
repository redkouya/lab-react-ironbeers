import axios from "axios";
import { useState } from "react";
import { BounceLoader } from "react-spinners";

function NewBeer() {
  const [isShowing, setIsShowing] = useState(false);

  const [formInputs, setFormInputs] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  }); //para cuando son muchos campos

  const handleNameChange = (e) => setFormInputs({...formInputs, name: e.target.value});
  const handleTaglineChange = (e) => setFormInputs({...formInputs, tagline: e.target.value});
  const handleDescriptionChange = (e) =>
    setFormInputs({...formInputs, description: e.target.value});
  const handleFirstBrewedChange = (e) =>
    setFormInputs({...formInputs, first_brewed: e.target.value});
  const handleBrewTipChange = (e) =>
    setFormInputs({...formInputs, brewers_tips: e.target.value});
  const handleAttenuationChange = (e) =>
    setFormInputs({...formInputs, attenuation_level: e.target.value});
  const handleContributedChange = (e) =>
    setFormInputs({...formInputs, contributed_by: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsShowing(true);
    const response = await axios.post(
      "https://ih-beers-api2.herokuapp.com/new",
      { formInputs }
    );
    setIsShowing(false);
    console.log(response.data);
  };

  if (isShowing) {
    return (
      <div className="container-spinner">
        <BounceLoader color="yellow" />
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formInputs.name}
          onChange={handleNameChange}
        />
        <br />
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          id="routes-container"
          value={formInputs.tagline}
          onChange={handleTaglineChange}
        />
        <br />
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
        <br />
        <label htmlFor="first_brewed ">First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          value={formInputs.first_brewed}
          onChange={handleFirstBrewedChange}
        />
        <br />
        <label htmlFor="brewers_tips">Brewers tips</label>
        <input
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          value={formInputs.brewers_tips}
          onChange={handleBrewTipChange}
        />
        <br />
        <label htmlFor="attenuation_level">Attenuation level</label>
        <input
          type="text"
          name="attenuation_level"
          id="attenuation_level"
          value={formInputs.attenuation_level}
          onChange={handleAttenuationChange}
        />
        <br />
        <label htmlFor="contributed_by">Contributed by</label>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          value={formInputs.contributed_by}
          onChange={handleContributedChange}
        />
        <br />
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
}

export default NewBeer;
