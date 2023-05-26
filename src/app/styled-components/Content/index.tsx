import styled from "styled-components";

// display: grid;
//     grid-template-columns: 1fr 3fr 3fr 3fr 1fr;
//     grid-template-rows: auto;
//     grid-gap: 1em;
//     grid-template-areas:
//       ". . title . ."
//       ". main-content main-content . ."
//       ". . secondery-content secondery-content ."
//       ". . button . .";

export const ContentStyled = styled.div`
  h2 {
    text-align: center;
    font-size: 36px;
  }
  display: flex;
  flex-direction: column;
  .preview {
    display: flex;
    flex-direction: column;
    min-height: calc(90% + 250px);
    padding: 0 10% 5% 10%;
    gap: 3em;
    .preview-title {
      text-align: center;
      font-size: 48px;
      font-weight: 700;
    }
    .preview-content {
      display: flex;
      flex-direction: column;
      gap: 5em;
      width: 80%;
      .preview-main-content {
        width: 100%;
        display: flex;
      }
      .preview-secondery-content {
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }
    }
    .preview-button {
      display: flex;
      justify-content: center;
      label {
        width: 12em;
        text-align: center;
        margin-top: 2em;
        padding: 1em 4em;
        border: 2px solid rgba(0, 0, 0, 0);
        border-radius: 10px;
        font-size: 22px;
        font-weight: 700;
        color: #263585;
        background: linear-gradient(
          91.79deg,
          #ffd600 31.78%,
          rgba(255, 255, 255, 0.88) 50.76%,
          #ffd600 69.22%
        );
        transition: all 0.2s linear;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
    }
    label {
      width: 60%;
      font-size: 20px;
      font-weight: 450;
    }
    @media (max-width: 560px) {
      .preview-content {
        display: flex;
        flex-direction: column;
        aligh-item: center;
        gap: 5em;
        width: 100%;
        .preview-main-content {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .preview-secondery-content {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
      .preview-button {
        label {
          width: 8em;
        }
      }
    }
  }
  .get-start {
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 5%;
    .row-start {
      display: flex;
      align-items: center;
      gap: 5em;
      .number-block {
        padding: 0.5em 1em;
        background: #ffd600;
        border-radius: 10px;
        color: #3672cb;
        font-size: 42px;
        font-weight: 750;
      }
      .content {
        display: flex;
        flex-direction: column;
        h4 {
          color: white;
          font-size: 24px;
        }
        label {
          font-size: 20px;
          color: white;
          text-align: start;
          padding-bottom: 1em;
        }
      }
    }
    @media (max-width: 560px) {
      .row-start {
        gap: 2em;
        flex-direction: column;
        .content {
          align-items: center;
          label {
            color: white;
            text-align: center;
          }
        }
      }
    }
  }
  .contacts {
    padding: 5%;
    .contacts-content {
      display: flex;
      justify-content: center;
      gap: 4em;
      .contacts-content-img {
        // width: 50%;
      }
      .contacts-content-text {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        label {
          max-width: 40em;
          font-size: 20px;
        }
        .icons {
          display: flex;
          flex-direction: column;
          gap: 2em;
          div {
            display: flex;
            gap: 2em;
          }
          img {
            width: 80px;
            cursor: pointer;
          }
        }
      }
      @media (max-width: 1024px) {
        align-items: center;
        flex-direction: column;
        gap: 2em;
        .contacts-content-img {
          width: 320px;
          height: auto;
        }
        .contacts-content-text {
          gap: 3em;
        }
      }
    }
  }
`;
