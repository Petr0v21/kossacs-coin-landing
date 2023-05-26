import styled from "styled-components";
import { device } from "../size";

export const HeaderWrapper = styled.div`
  width: calc(100% - 10%);
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: 1% 5%;
  .logo {
    @media ${device.mobileS} {
      height: 80px;
      weight: auto;
    }
    @media ${device.tablet} {
      height: 90px;
      weight: auto;
    }
    @media ${device.laptop} {
      height: 100px;
      weight: auto;
    }
  }
  .header-links {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2em;
    label {
      cursor: pointer;
      color: white;
      font-size: 24px;
      font-weight: 500;
      transition: all 0.2s linear;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  @media ${device.mobileS} {
    label {
      display: none;
    }

    .logo {
      display: block;
    }
    .header-icon {
      display: flex;
    }
  }

  @media (min-width: 860px) {
    label {
      display: block;
    }
    select {
      display: block;
    }
    .header-links {
      justify-content: space-evenly;
    }
    .header-icon {
      display: none;
    }
  }
`;

export const HeaderForPhoneIcon = styled.div`
  width: 40px;
  height: 1em;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  cursor: pointer;
  .stroke {
    height: 2px;
    width: 40px;
    background: white;
  }
  .stroke-open {
    height: 2px;
    width: 20px;
    background: white;
  }
`;

export const HeaderForPhoneStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  height: 80vh;
  label {
    color: white;
    font-size: 24px;
    font-weight: 500;
    transition: all 0.2s linear;
    &:hover {
      opacity: 0.7;
    }
  }
`;
