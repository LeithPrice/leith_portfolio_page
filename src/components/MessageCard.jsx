import { Form } from "react-bootstrap";
import React from "react";

const MessageCard = (props) => {
  const { message, email, name, textColour, cardColour } = props;
  return (
    <Form>
      <div
        style={{ backgroundColor: cardColour }}
        sx={{ maxWidth: 400, height: 150, wordWrap: "break-word" }}
      >
        <div color={textColour}>
          Hi Leith,
          <br></br>
          <br></br>
          {message}
          <br></br>
          <br></br>
          From: {name} ({email})
        </div>
      </div>
    </Form>
  );
};

export default MessageCard;
