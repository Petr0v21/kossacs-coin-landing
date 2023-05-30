import React from "react";
import Graph from "../../../static/images/tokenomics.png";
import "./styles.css";

const Tokenomics: React.FC = () => {
  return (
    <div className="tokenomics" id="tokenomics">
      <h2>Tokenomics</h2>
      <h4 className="ttitle">
        Total supply: <span className="spec">444,444,444,444,444</span>
      </h4>
      <div className="tokenomicsBody">
        <div className="tokenomicsInfo">
          <div className="tokenomicsInfoContent">
            <p>
              LP supply: <span className="spec">422,222,222,222,222</span>
            </p>
            <p>
              <a
                href="https://etherscan.io/token/0x5bf23d44304cc645c98f15bc2696fc0eb1ccc0c7?a=0xdf203f5aa930cb1161a11a9b921d7e4559b2b4f3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="spec">5% allocated</span>
              </a>{" "}
              for community development purposes
            </p>
            <p>
              LP tokens{" "}
              <a
                href="https://etherscan.io/tx/0x233a5ee41d4771cce909dd030c8b9436f08d3efc10dc8d02c5f4f13451244a27"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="spec">burnt</span>
              </a>{" "}
              , contract{" "}
              <a
                href="https://etherscan.io/tx/0x3dd72d98c8dca1430b3a004e17f1966b4789085a22632da37d88efe84430caeb#eventlog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="spec">renounced</span>
              </a>
            </p>
            <p>
              No taxes, GoPlus Token Security{" "}
              <span className="spec">Rating A+++</span>
            </p>
          </div>
        </div>
        <img alt="graph" src={Graph} className="graph" />
      </div>
    </div>
  );
};

export default Tokenomics;
