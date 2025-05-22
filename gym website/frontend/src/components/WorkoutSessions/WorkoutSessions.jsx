import React from "react";
import classes from "./WorkoutSessions.module.css";
import img5 from "../../assets/img5.jpg";

const WorkoutSessions = () => {
  return (
    <section className={classes["workout_session"]}>
      {/* TOP WORKOUT SESSION */}
      <div className={classes.wrapper}>
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
          cupiditate unde vitae tempore minima delectus, expedita neque.
        </p>
        <img src={img5} alt="topWorkoutSession/img5" />
      </div>

      {/* FEATURED BOOTCAMPS */}
      <div className={classes.wrapper}>
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
          cupiditate unde vitae tempore minima delectus, expedita neque.
        </p>

        {/* BOOTCAMPS */}
        <div className={classes.bootcamps}>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            aut laborum atque, magnam adipisci placeat omnis possimus doloribus
            voluptate beatae.
          </p>
        </div>
        <div className={classes.bootcamps}>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            aut laborum atque, magnam adipisci placeat omnis possimus doloribus
            voluptate beatae.
          </p>
        </div>
        <div className={classes.bootcamps}>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            aut laborum atque, magnam adipisci placeat omnis possimus doloribus
            voluptate beatae.
          </p>
        </div>
        <div className={classes.bootcamps}>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            aut laborum atque, magnam adipisci placeat omnis possimus doloribus
            voluptate beatae.
          </p>
        </div>
        <div className={classes.bootcamps}>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            aut laborum atque, magnam adipisci placeat omnis possimus doloribus
            voluptate beatae.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
