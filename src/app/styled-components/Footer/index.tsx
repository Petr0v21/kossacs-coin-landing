import styled from "styled-components";
import { device } from "../size";

export const FooterWrapper = styled.div`
  width: calc(100% - 10% - 5%);
  margin: 0 5%;
  padding: 1em 2.5%;
  border-top: 1px solid white;
  display: flex;
  gap: 2em;
  justify-content: center;
  align-items: center;
  .copyright {
    font-family: Monesta-Light-DEMO;
    gont-size: 12px;
    color: white;
    opacity: 0.8;
  }
`;
