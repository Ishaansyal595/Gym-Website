import React from "react";
import classes from "./Hero.module.css";
// import Button from "../../UI/Button";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.content}>
        <div className={classes.title}>
          <h1>LET'S</h1>
          <h1>DO</h1>
          <h1>WORKOUT</h1>
        </div>

        <div className={classes['sub-title']}>
          <p>Your Journey to Fitness Starts Here...</p>
          <p>Unleash Your Potential</p>
        </div>

        <div className={classes.buttons}>
          <button>Start Your Journey</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
