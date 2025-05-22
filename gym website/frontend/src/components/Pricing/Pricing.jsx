import React from "react";
import { Check } from "lucide-react";
import classes from "./Pricing.module.css";
import priceIMAGE from "../../assets/pricing.jpg";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgURL: priceIMAGE,
      title: "Basic",
      price: 2000,
      length: "1 Month",
    },
    {
      imgURL: priceIMAGE,
      title: "Silver",
      price: 4500,
      length: "3 Month",
    },
    {
      imgURL: priceIMAGE,
      title: "Gold",
      price: 8000,
      length: "6 Month",
    },
    {
      imgURL: priceIMAGE,
      title: "Platinum",
      price: 12000,
      length: "12 Month",
    },
  ];

  return (
    <div className={classes.pricing}>
      <h2>ELITE FITNESS PLANS</h2>
      <div className={classes.wrapper}>
        {pricing.map((element) => {
          return (
            <div className={classes.card} key={element.title}>
              <img src={element.imgURL} alt={element.title} />
              <div className={classes.title}>
                <h1>{element.title}</h1>
                <h2>PACKAGE</h2>
                <h3>For {element.length}</h3>
                <h3>Rs {element.price}</h3>
              </div>

              <div className={classes.description}>
                <div className={classes.facilities}>
                <p>
                  <Check /> Equipment
                </p>
                <p>
                  <Check /> Free Restroom
                </p>
                <p>
                  <Check /> Free Parking
                </p>
                {element.title === "Gold" || element.title === "Platinum" ? (
                  <p>
                    <Check /> Free Wi-Fi
                  </p>
                ) : (
                  ""
                )}
                {element.title === "Platinum" && (
                  <p>
                    <Check /> Free Personal Trainer
                  </p>
                )}
                </div>
                <Link className="button" to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
