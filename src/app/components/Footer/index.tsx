import React from "react";
import { FooterWrapper } from "../../styled-components/Footer";
import Logo from "../../../static/images/Logo.svg";
import TelegramIcon from "../../../static/images/TelegramIcon.svg";
import TwiterIcon from "../../../static/images/TwitterIcon.svg";
import FacebookIcon from "../../../static/images/FacebookIcon.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-title">
        <img alt="logo" className="logo" src={Logo} />
        <h2>Cossacs</h2>
      </div>
      <label className="copyright">© 2023 by PEPE. All rights reserved!</label>
      <div className="footer-nav-links">
        <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <label>Main info</label>
        </Link>
        <Link
          activeClass="active"
          to="test2"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <label>Getting started</label>
        </Link>
        <Link
          activeClass="active"
          to="test3"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <label>Roadmap</label>
        </Link>
        <Link
          activeClass="active"
          to="test4"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <label>Community</label>
        </Link>
      </div>
      <div className="media">
        <div className="soc-media">
          <img alt="TelegramIcon" src={TelegramIcon} />
          <img alt="TwiterIcon" src={TwiterIcon} />
        </div>
      </div>
    </FooterWrapper>
  );
};
