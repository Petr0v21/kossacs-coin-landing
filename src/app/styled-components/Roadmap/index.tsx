import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    right: -50%;
  }
  to {
    right: 0;
  }
`;

export const RoadmapStyledWrapper = styled.div<{ animate: boolean }>`
  padding: 5% 0;
  .roadmap-image {
    display: flex;
    justify-content: center;
    overflow: hidden;
    img {
      ${(props) =>
        props.animate &&
        css`
          animation: ${fadeIn} 1s ease-out;
        `}
      position: relative;
      // animation: example 2s;
      // animation-timing-function: linear;
      width: 60%;
      overflow: hidden;
      max-width: 900px;
      min-width: 320px;
    }
  }
  .roadmap-short-text {
    padding: 2em 0;
    display: flex;
    justify-content: center;
    label {
      padding: 0 5%;
      font-size: 24px;
      font-weight: 500;
      max-width: 900px;
    }
  }
  .steps {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4em;
    .step {
      background: #ffd600;
      border-radius: 10px;
      width: 200px;
      height: 450px;
      padding: 2em;
      h3 {
        margin: 0;
        padding: 0;
        font-family: Monesta-Light-DEMO;
        font-size: 36px;
        font-weight: 750;
        color: black;
      }
      label {
        p {
          color: black;
        }
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
`;
