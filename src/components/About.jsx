import React from "react";
import "../styles/About.css";
import img1 from "../assets/image1.svg";
import img2 from "../assets/image2.svg";
import img3 from "../assets/image3.svg";
import img4 from "../assets/image4.svg";
import img6 from "../assets/image6.svg";

const About = () => {
  return (
    <div className="orbitals">
      <div className="system__orbit system__orbit--con">

      </div>

      <div className="system__orbit system__orbit--game">
      <h1 className="contentTitle" id="new">
          Driffle is a <span className="details">one-stop shop </span>
          <span className="line2">for all your gaming needs</span>
        </h1>
        <p className="contentText" id="new">
          Not only do we sell games, but also offer gift cards, DLC's, and more.
          Driffle is a marketplace, so you can find a wide variety of items from
          different sellers in one place. We are committed to the future of
          gaming and strive to make our platform safe, affordable, and
          sustainable for all users. Whether you're looking for the latest
          releases or hard-to-find classics, you're sure to find what you're
          looking for on Driffle.
        </p>
        <button className="visitButton" id="new">Visit our store</button>
        <div className="system__game system__game --game">
          <img src={img1} alt="Venus" />
        </div>
      </div>
      <div className="system__orbit system__orbit--game2">
        <div className="system__game system__game--game2">
          <img src={img3} alt="Photo" />
        </div>
        <img src={img2} alt="Photo" />
      </div>
      <div className="system__orbit system__orbit--game3">
        <div className="system__game system__game--game3">
          <img src={img4} alt="GameTile" />
          <div className="game3-space" />
          <img src={img6} alt="GameTile" />
        </div>
      </div>
    </div>
  );
};

export default About;
