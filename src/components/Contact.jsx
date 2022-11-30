import React, { useReducer, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Navigate } from "react-router-dom";
import "./contact.css";
import Pagetitle from "./Pagetitle";
import { Button } from "react-bootstrap";
import reducer from "../utils/ContactReducer";

export default function Contact() {
  const [shouldRedirect, setshouldRedirect] = useState(false);

  useEffect(() => {
  }, [shouldRedirect]);
  // set state initially
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    treatment: "", 
    message: "",
    userMessage: "",
  };

  const [store, dispatch] = useReducer(reducer, initialState);
  const {
    firstName,
    lastName,
    message,
    email,
    contact,
    userMessage,
  } = store;

  //   function for form data state change
  function handleOnChange(event) {
    dispatch({
      type: "setFormData",
      data: event.target,
    });
  }

  // function for Usermessage state change
  function setUserMessage(userMessage) {
    dispatch({
      type: "setUserMessage",
      data: userMessage,
    });
  }

  //   function for using regex to determin if an input is in an email structure
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  //    function for contact form submission
  // has user input sanitisation
  // then will link toi third party provider emailJS to send an email with the information input into the form
  function sendEmail(event) {
    event.preventDefault();
    if (firstName.length === 0) {
      setUserMessage("First name must be provided!");
    } else if (lastName.length === 0) {
      setUserMessage("Last name must be provided!");
    } else if (email.length === 0) {
      setUserMessage("Email must be provided!");
    } else if (!isValidEmail(email)) {
      setUserMessage("Please check the email typed in, something is wrong.");
    } else if (isNaN(parseInt(contact))) {
      setUserMessage("Contact number must be provided!");
    } else if (contact.length < 10 || contact.length > 10) {
      setUserMessage("A valid contact number must be provided!");
    } else if (message.length === 0) {
      setUserMessage("Message must be provided!");
    } else {
      emailjs
        .sendForm(
          "service_tq39byp",
          "template_i77ylq8",
          event.target,
          "0ws-FsfLFaYkm7ueZ"
        )
        .then(
          (result) => {
            console.log(result.text);
            setshouldRedirect(true);
          },

          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  //   when the form is submitted the following line will reset the form fields
  //   event.target.reset

  return (
    <>
      {shouldRedirect && <Navigate to="/confirmation" />}

      <Pagetitle
        title="Contact Us"
        description="and we'll respond with 1 business day"
      />
      <p style={{ color: "blue" }}>
        <b>{userMessage}</b>
      </p>

      <div className="container">
        <form onSubmit={sendEmail}>
          <div>
            <input
              data-testid="firstName"
              type="text"
              className="form-control"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <input
              data-testid="lastName"
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <input
              data-testid="email"
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <input
              type="tel"
              data-testid="tel"
              className="form-control"
              placeholder="Contact Number"
              name="contact"
              value={contact}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <input
              data-testid="message"
              type="textarea"
              cols="30"
              row="8"
              className="form-control"
              placeholder="Message"
              name="message"
              value={message}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <Button
              data-testid="button"
              className="submit"
              type="submit"
              value="SEND MESSAGE"
            >SEND MESSAGE</Button>
          </div>
        </form>
      </div>
    </>
  );
}
