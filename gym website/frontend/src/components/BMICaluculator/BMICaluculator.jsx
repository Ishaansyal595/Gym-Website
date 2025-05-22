import React, { useEffect, useReducer } from "react";
import classes from "./BMICaluculator.module.css";
import { toast } from "react-toastify";
import bmiImage from "../../assets/bmi.jpg";

const bmiReducerHandler = (state, action) => {
  switch (action.type) {
    case "HEIGHT":
      return { ...state, height: action.payload };
    case "WEIGHT":
      return { ...state, weight: action.payload };
    case "BMI":
      return { ...state, bmi: action.payload };
    case "GENDER":
      return { ...state, gender: action.payload };
    case "RESET":
      return {
        height: "",
        weight: "",
        bmi: "",
        gender: "",
      };
    default:
      return state; // <-- always include this to avoid breaking the reducer
  }
};

const BMICaluculator = () => {
  const initialStateBmi = {
    height: "",
    weight: "",
    bmi: "",
    gender: "",
  };

  const [reducerBMI, dispatchBMI] = useReducer(
    bmiReducerHandler,
    initialStateBmi
  );

  const handleHeight = (e) => {
    const height = e.target.value;
    dispatchBMI({ type: "HEIGHT", payload: height });
  };
  const handleWeight = (e) => {
    const weight = e.target.value;
    dispatchBMI({ type: "WEIGHT", payload: weight });
  };
  const handleGender = (e) => {
    const gender = e.target.value;
    dispatchBMI({ type: "GENDER", payload: gender });
  };

  const height = reducerBMI.height;
  const weight = reducerBMI.weight;
  const gender = reducerBMI.gender;
  const bmi = reducerBMI.bmi;

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please fill in all fields");
      return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    dispatchBMI({ type: "BMI", payload: bmi });

    if (bmi < 18.5) {
      toast.warning(
        "You are underweight. Please consult a Health Care Provider."
      );
    } else if (bmi >= 18.5 && bmi < 24.9) {
      toast.success("You are healthy. Keep it up!");
    } else if (bmi >= 25 && bmi < 29.9) {
      toast.warning(
        "You are overweight. Please consult a Health Care Provider."
      );
    } else {
      toast.error("You are obese. Please consult a Health Care Provider.");
    }

    setTimeout(() => {
      dispatchBMI({ type: "RESET" }); // ✅ This always runs after toast message
    }, 2000);
  };

  return (
    <section className={classes.bmi}>
      <h1>BMI CALCULATOR</h1>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <form onSubmit={calculateBMI}>
            <div>
              <label htmlFor="height">Enter Your Height (in cm)</label>
              <input
                type="text"
                onChange={handleHeight}
                value={height}
                placeholder="Enter Your Height"
              />
            </div>
            <div>
              <label htmlFor="weight">Enter Your Weight</label>
              <input
                type="text"
                onChange={handleWeight}
                value={weight}
                placeholder="Enter Your Weight"
              />
            </div>
            <div className={classes.gender}>
              <label>Your Gender :</label>
              <div className={classes.options}>
                <label htmlFor="gender">Male</label>
                <input
                  type="radio"
                  onChange={handleGender}
                  value="male"
                  checked={gender === "male"}
                />
                <label htmlFor="gender">Female</label>
                <input
                  type="radio"
                  onChange={handleGender}
                  value="female"
                  checked={gender === "female"}
                />
                <label htmlFor="gender">Others</label>
                <input
                  type="radio"
                  onChange={handleGender}
                  value="others"
                  checked={gender === "others"}
                />
              </div>
            </div>
            <div>
              <label htmlFor="bmi">BMI</label>
              <input type="number" value={bmi} placeholder="BMI" disabled />
            </div>
            <button type="submit">Calculate Your BMI</button>
          </form>
        </div>

        <div className={classes.wrapper}>
          <img src={bmiImage} alt="bmi image" />
        </div>
      </div>
    </section>
  );
};

export default BMICaluculator;
