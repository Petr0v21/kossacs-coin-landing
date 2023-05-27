import React from "react";
import { RoadmapStyledWrapper } from "../../styled-components/Roadmap";
import Bike from "../../../static/images/byciclewithoutbg.svg";

export const Roadmap = () => {
  return (
    <RoadmapStyledWrapper id="test3">
      <h2>Roadmap</h2>
      <div className="roadmap-short-text">
        <label>
          All jokes aside, here is a rough sketch of $pepe path ahead. We dont
          wan’t to give everything away on day 1, Expect surprises along the
          way;
        </label>
      </div>
      <div className="roadmap-image">
        <img alt="bike" src={Bike} />
      </div>
      <div className="steps">
        <div className="step">
          <h3>Phase 1</h3>
          <label>
            <p> - Launch</p>
            <p> - CoinGecko/ Coinmarketcap</p>
            <p> - Listings 1,000+ Holders </p>
            <p> - Get $PEPE Trending on twitter with our memetic power</p>
          </label>
        </div>
        <div className="step">
          <h3>Phase 2</h3>
          <label>
            <p> - Community Partnerships Pepe Times digital newsletter</p>
            <p>
              - Formation of token gated discord group, Pepe Palace, for
              holders, more details tba
            </p>
            <p> - CEX Listings 10,000+holders </p>
          </label>
        </div>
        <div className="step">
          <h3>Phase 3</h3>
          <label>
            <p> - Pepe merch</p>
            <p> - Pepe Academy</p>
            <p> - Pepe Tools </p>
            <p> - T1 Exchange Listings 100,000+ holders</p>
            <p> - Meme Takeover</p>
          </label>
        </div>
      </div>
    </RoadmapStyledWrapper>
  );
};
