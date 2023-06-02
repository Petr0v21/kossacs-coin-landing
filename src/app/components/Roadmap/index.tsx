import React, { useEffect, useState } from "react";
import { RoadmapStyledWrapper } from "../../styled-components/Roadmap";
import Bike from "../../../static/images/bycicleWithBorder.png";

export const Roadmap: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  const handleScrollAnimation = () => {
    const element = document.getElementById("test3");
    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      setAnimate(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollAnimation);
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return (
    <RoadmapStyledWrapper id="test3" animate={animate}>
      <h2>Roadmap</h2>
      <div className="roadmap-short-text">
        <label>
          Capitalizing on the resounding success of renowned meme coins such as
          Pepe and Dogecoin, Cossacks aims to be a successful meme-based
          cryptocurrency as it combines cleverness, humor, and cultural
          significance to attract a large audience and become one of the top
          meme coins in the cryptocurrency world.
        </label>
      </div>
      <div className="roadmap-image">
        <img alt="bike" src={Bike} />
      </div>
      <div className="steps">
        <div className="step">
          <h3>War I</h3>
          <label>
            <p> - Token Launch</p>
            <p> - Website</p>
            <p> - Army Base </p>
          </label>
        </div>
        <div className="step">
          <h3>WAR II</h3>
          <label>
            <p> - CoinGecko/ Coinmarketcap Listings</p>
            <p> - Marketing</p>
            <p> - Army: 10,000+ holders</p>
          </label>
        </div>
        <div className="step">
          <h3>WAR III</h3>
          <label>
            <p> - Get $CSKS Trending on Twitter</p>
            <p> - CEX Listings</p>
            <p> - A pledge to donate 2T coins to Ukrainian Army</p>
            <p> - Army: 100,000+ holders</p>
          </label>
        </div>
      </div>
    </RoadmapStyledWrapper>
  );
};
