import { useState } from "react";

function NewBeer() {
  const [isShowing, setIsShowing] = useState(true);

  const [formInputs, setFormInputs] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  }); //para cuando son muchos campos

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={formInputs.name} />
        <br />
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          id="routes-container"
          value={formInputs.tagline}
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
        ></textarea>
        <br />
        <label htmlFor="first_brewed ">First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          value={formInputs.first_brewed}
        />
        <br />
        <label htmlFor="brewers_tips">Brewers tips</label>
        <input
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          value={formInputs.brewers_tips}
        />
        <br />
        <label htmlFor="attenuation_level">Attenuation level</label>
        <input
          type="text"
          name="attenuation_level"
          id="attenuation_level"
          value={formInputs.attenuation_level}
        />
        <br />
        <label htmlFor="contributed_by">Contributed by</label>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          value={formInputs.contributed_by}
        />
        <br />
        <button>Añadir</button>
      </form>
    </div>
  );
}

export default NewBeer;
