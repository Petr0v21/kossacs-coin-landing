import React from "react";
import { FooterWrapper } from "../../styled-components/Footer";
import Logo from "../../../static/images/Logo.svg";
import TelegramIcon from "../../../static/images/TelegramIcon.svg";
import TwiterIcon from "../../../static/images/TwitterIcon.svg";
import FacebookIcon from "../../../static/images/FacebookIcon.svg";

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-title">
        <img alt="logo" className="logo" src={Logo} />
        <h2>Kozak coin</h2>
      </div>
      <div className="footer-nav-links">
        <label>Main info</label>
        <label>Getting started</label>
        <label>Community</label>
      </div>
      <div className="media">
        <div className="soc-media">
          <img alt="TelegramIcon" src={TelegramIcon} />
          <img alt="TwiterIcon" src={TwiterIcon} />
          <img alt="FacebookIcon" src={FacebookIcon} />
        </div>
      </div>
    </FooterWrapper>
  );
};
