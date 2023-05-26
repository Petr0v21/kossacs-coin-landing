import styled from "styled-components";
import { device } from "../size";

export const FooterWrapper = styled.div`
  width: calc(100% - 10% - 5%);
  margin: 0 5%;
  padding: 1em 2.5%;
  border-top: 1px solid white;
  display: flex;
  gap: 2em;
  justify-content: space-between;
  align-items: center;
  .footer-title {
    display: flex;
    align-items: center;
    gap: 1em;
    .logo {
      //   width: 5em;
      //   height: auto;
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
  }
  .footer-nav-links {
    display: flex;
    flex-direction: column;
    gap: 1em;
    font-weight: 550;
  }

  .media {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;
    img {
      width: 2.5em;
      height: auto;
    }
    .soc-media {
      display: flex;
      gap: 2em;
    }
  }

  @media ${device.mobileS} {
    flex-direction: column;
    .media {
      flex-direction: column;
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    .media {
      flex-direction: row;
    }
  }
`;
