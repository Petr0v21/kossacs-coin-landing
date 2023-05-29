import React from 'react';
import Graph from '../../../static/images/tokenomics.svg';
import './styles.css';

const Tokenomics: React.FC = () => {
    return (
        <div className="tokenomics">
            <h2>Tokenomics</h2>
            <img alt="graph" src={Graph} className="graph" />
            <div>
                <div><p>Total supply: <span className="spec">444,444,444,444,444</span></p></div>
                <div><p>LP supply: <span className="spec">422,222,222,222,222</span></p></div>
                <div><p><span className="spec">5%</span> allocated for community development purposes.</p></div>
                <div><p>LP tokens burnt, contract renounced.</p></div>
                <div><p>No taxes, GoPlus Token Security <span className="spec">Rating A+++</span></p></div>
            </div>
        </div>
    )
}

export default Tokenomics;