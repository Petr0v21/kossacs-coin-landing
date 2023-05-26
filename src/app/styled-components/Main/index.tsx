import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .coin {
    position: absolute;
    z-index: -1;
    width: auto;
    height: 47%;
    right: 0;
    top: 25%;
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
  @media (max-width: 560px) {
    .coin {
      height: 47%;
      top: 15%;
      opacity: 0.6;
    }

    .coin_group {
      height: 250px;
      top: 60%;
      opacity: 0.6;
    }
  }
`;
