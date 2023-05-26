import styled from "styled-components";

export const RoadmapStyledWrapper = styled.div`
  .steps {
    padding: 5%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4em;
    .step {
      background: #ffd600;
      border-radius: 10px;
      width: 200px;
      height: 400px;
      padding: 2em;
      h3 {
        margin: 0;
        padding: 0;
        font-size: 28px;
        font-weight: 750;
        color: #3672cb;
      }
      label {
        p {
          color: #3672cb;
        }
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
`;
