import React from "react";
import {  Form  } from "react-bootstrap";

const ColourChoicePanel = (props) => {
    const {textColour, cardColour, setTextColour, setCardColour} = props;
    
  function handleChange(event) {
    let {name, value} = event.target;
    if(name === 'text-colour') {
        setTextColour(value);
    } else if (name === 'card-colour') {
        setCardColour(value);
    }
  }

  return (
    <Form>
      <p>Text Colour</p>
      <input name="text-colour" type="color" value={textColour} onChange={handleChange}  />

      <p>Card Colour</p>
      <input name="card-colour" type="color" value={cardColour} onChange={handleChange} />
    </Form>
  );
};

export default ColourChoicePanel;
