import styled from "styled-components";
import { device } from "../size";

export const HeaderWrapper = styled.div`
  width: calc(100% - 10%);
  display: flex;
  justify-content: space-between;
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
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2em;
    label {
      cursor: pointer;
      color: white;
      font-size: 24px;
      font-weight: 500;
      font-family: Norse;
      transition: all 0.2s linear;
      &:hover {
        opacity: 0.7;
      }
    }
    .header-button {
      box-shadow: 10px 10px 10px #7a6700;
      border-radius: 12px;
      a label {
        color: black;
        cursor: pointer;
        letter-spacing: 0.1em;
        padding: 0.4em 1.5em;
        font-family: Norse;
        font-size: 24px;
        border-radius: 12px;
        background: linear-gradient(
          91.79deg,
          #ffd600 31.78%,
          rgba(255, 255, 255, 0.88) 50.76%,
          #ffd600 69.22%
        );
        transition: all 0.2s linear;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  @media ${device.mobileS} {
    .header-links {
      gap: 0;
    }
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

  @media (min-width: 1100px) {
    label {
      display: block;
    }
    select {
      display: block;
    }
    .header-links {
      width: 100%;
      gap: 2em;
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
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  .header-button {
    padding: 2em 0;
    a label {
      color: black;
      cursor: pointer;
      letter-spacing: 0.1em;
      padding: 0.4em 2em;
      font-family: Norse;
      font-size: 32px;
      border-radius: 12px;
      background: linear-gradient(
        91.79deg,
        #ffd600 31.78%,
        rgba(255, 255, 255, 0.88) 50.76%,
        #ffd600 69.22%
      );
      transition: all 0.2s linear;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
