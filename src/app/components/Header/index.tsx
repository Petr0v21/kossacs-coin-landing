import React from "react";
import {
  HeaderForPhoneIcon,
  HeaderForPhoneStyled,
  HeaderWrapper,
} from "../../styled-components/Header";
import Logo from "../../../static/images/Logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export const Header: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  return (
    <HeaderWrapper>
      <img src={Logo} className="logo" />
      <div className="header-links">
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
          <label>Community</label>
        </Link>

        <HeaderForPhoneIcon
          className="header-icon"
          onClick={() => setOpen(!open)}
        >
          <span className="stroke" />
          <span className="stroke" />
          <span className={open ? "stroke" : "stroke-open"} />
        </HeaderForPhoneIcon>
      </div>
    </HeaderWrapper>
  );
};

export const HeaderForPhone: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setOpen }) => {
  return (
    <HeaderForPhoneStyled>
      <label
        onClick={() => {
          setOpen(false);
          scroll.scrollToTop({
            duration: 1000,
            delay: 100,
            smooth: true,
            spy: true,
          });
        }}
      >
        Main info
      </label>
      <label
        onClick={() => {
          setOpen(false);
          scroll.scrollTo(800, {
            duration: 1000,
            delay: 100,
            smooth: true,
            spy: true,
          });
        }}
      >
        Getting started
      </label>
      <label
        onClick={() => {
          setOpen(false);
          scroll.scrollTo(3000, {
            duration: 1000,
            delay: 100,
            smooth: true,
            spy: true,
          });
        }}
      >
        Community
      </label>
    </HeaderForPhoneStyled>
  );
};
