import styled from "styled-components";

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
      align-items: center;
      gap: 5em;
      width: 100%;
      .preview-main-content {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .logo-for-mobile {
        max-width: 400px;
        min-width: 200px;
      }
      .preview-secondery-content {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
    .preview-button {
      display: flex;
      justify-content: center;
      a {
        cursor: pointer;
        label {
          font-family: Norse;
          font-size: 30px;
          font-weight: 900;
          color: rgb(54, 114, 203);
          cursor: pointer;
          letter-spacing: 0.1em;
        }
        width: 16em;
        text-align: center;
        margin-top: 2em;
        padding: 1em 4em;
        border: 2px solid rgba(0, 0, 0, 0);
        border-radius: 10px;

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
    label {
      width: 60%;
      font-size: 20px;
      font-weight: 450;
    }
    @media (max-width: 720px) {
      gap: 1em;
      .preview-content {
        display: flex;
        flex-direction: column;
        aligh-item: center;
        gap: 1em;
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
      label {
        width: 100%;
      }
    }
    @media (min-width: 720px) {
      .logo-for-mobile {
        display: none;
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
        border-radius: 10px;
        font-size: 42px;
        font-weight: 750;
        background: rgb(255, 214, 0);
        color: rgb(54, 114, 203);
      }
      .content {
        display: flex;
        flex-direction: column;
        h4 {
          font-family: Norse;
          color: rgb(255 214 0);
          font-size: 24px;
        }
        label {
          font-size: 24px;
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
          font-size: 24px;
        }
        .icons {
          display: flex;
          flex-direction: column;
          gap: 2em;
          div {
            display: flex;
            justify-content: center;
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
