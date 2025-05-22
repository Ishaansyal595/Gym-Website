import React, { useEffect, useReducer, useState } from "react";
import classes from "./Contact.module.css";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { toast } from "react-toastify";

const reducerHandler = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return {
        ...state,
        email: {
          value: action.emailValue,
          isValid: action.emailValue.includes("@"),
        },
      };
    case "NAME":
      return {
        ...state,
        name: {
          value: action.nameValue,
          isValid: action.nameValue.trim().length > 0,
        },
      };
    case "MESSAGE":
      return {
        ...state,
        message: {
          value: action.messageValue,
          isValid: action.messageValue.trim().length > 0,
        },
      };
    case "RESET":
      return {
        name: { value: "", isValid: null },
        email: { value: "", isValid: null },
        message: { value: "", isValid: null },
      };
    default:
      return state;
  }
};

const Contact = () => {
  const initialState = {
    name: { value: "", isValid: null },
    email: { value: "", isValid: null },
    message: { value: "", isValid: null },
  };

  const [reducerState, dispatchReducer] = useReducer(
    reducerHandler,
    initialState
  );
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const emailChangeHandler = (e) => {
    const email = e.target.value;
    dispatchReducer({ type: "EMAIL", emailValue: email });
  };
  const nameChangeHandler = (e) => {
    const name = e.target.value;
    dispatchReducer({ type: "NAME", nameValue: name });
  };
  const messageChangeHandler = (e) => {
    const message = e.target.value;
    dispatchReducer({ type: "MESSAGE", messageValue: message });
  };

  const name = reducerState.name.value;
  const email = reducerState.email.value;
  const message = reducerState.message.value;

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/send/mail",
        {
          name,
          email,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(data);
      console.log(data.message);

      toast.success(data.message);
      dispatchReducer({ type: "RESET" });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || "Something went wrong!");
      console.log(error.response?.data?.message || "Something went wrong!");
    }
  };

  useEffect(() => {
    toast("Toast test");
  }, []);

  return (
    <section className={classes.contact}>
      <form action="" onSubmit={submitHandler}>
        <h1>Contact US</h1>
        <div>
          <label
            htmlFor="name"
            className={
              focusedField === "name" || name.length > 0
                ? classes["small-label"]
                : ""
            }
          >
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={nameChangeHandler}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className={
              focusedField === "email" || name.length > 0
                ? classes["small-label"]
                : ""
            }
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={emailChangeHandler}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className={
              focusedField === "message" || name.length > 0
                ? classes["small-label"]
                : ""
            }
          >
            Message
          </label>
          <input
            type="text"
            value={message}
            onChange={messageChangeHandler}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {loading && <ClipLoader color="black" size={15} />}
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
