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
        <div className="header-button">
          <a
            href="https://app.uniswap.org/#/tokens/ethereum/0x5bf23d44304cc645c98f15bc2696fc0eb1ccc0c7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <label>Buy</label>
          </a>
        </div>

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
          setTimeout(() => {
            const h1 = document.getElementById("test1")?.offsetHeight!;
            scroll.scrollTo(h1, {
              duration: 1000,
              smooth: true,
              spy: true,
            });
          }, 100);
        }}
      >
        Getting started
      </label>
      <label
        onClick={() => {
          setOpen(false);
          setTimeout(() => {
            const h1 = document.getElementById("test1")?.offsetHeight!;
            const h2 = document.getElementById("test2")?.offsetHeight!;
            scroll.scrollTo(h1 + h2, {
              duration: 1000,
              smooth: true,
              spy: true,
            });
          }, 100);
        }}
      >
        Roadmap
      </label>
      <label
        onClick={() => {
          setOpen(false);
          setTimeout(() => {
            const h1 = document.getElementById("test1")?.offsetHeight!;
            const h2 = document.getElementById("test2")?.offsetHeight!;
            const h3 = document.getElementById("test3")?.offsetHeight!;
            scroll.scrollTo(h1 + h2 + h3, {
              duration: 1000,
              smooth: true,
              spy: true,
            });
          }, 100);
        }}
      >
        Community
      </label>
      <div className="header-button">
        <a
          href="https://app.uniswap.org/#/tokens/ethereum/0x5bf23d44304cc645c98f15bc2696fc0eb1ccc0c7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <label>Buy</label>
        </a>
      </div>
    </HeaderForPhoneStyled>
  );
};
