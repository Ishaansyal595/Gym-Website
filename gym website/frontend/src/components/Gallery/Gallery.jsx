import React from "react";
import classes from "./Gallery.module.css";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";

const Gallery = () => {
  const galleryArr = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <section className={classes.gallery}>
      <h1>BETTER BEATS BEST</h1>
      <div className={classes.images}>
        {galleryArr.map((img, index) => (
          <img key={index} src={img} alt={index + 1} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
