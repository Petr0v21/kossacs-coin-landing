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
      <label className="copyright">
        © 2023 by Cossacs. All rights reserved!
      </label>
    </FooterWrapper>
  );
};
