import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .rune {
    position: absolute;
    z-index: -1;
    width: auto;
    height: 60%;
    left: 5%;
    top: 20%;
    opacity: 0.5;
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
    opacity: 0.7;
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
