import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
`;

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .rune {
    position: absolute;
    z-index: -1;
    width: auto;
    height: 40%;
    left: 5%;
    top: 40%;
    opacity: 0.5;
    animation: ${fadeIn} 4s ease-out;
    animation-iteration-count: infinite;
    // animation-delay: 2s;
  }

  .coin {
    position: absolute;
    z-index: -1;
    width: auto;
    height: 60%;
    right: 0;
    top: 15%;
    opacity: 0.8;
  }

  .coin_group {
    position: absolute;
    z-index: -1;
    width: auto;
    height: 250px;
    right: 0;
    top: 70%;
    opacity: 0.9;
  }
  @media (max-width: 720px) {
    .rune {
      display: none;
    }

    .coin {
      display: none;
    }

    .coin_group {
      display: none;
    }
  }
`;
