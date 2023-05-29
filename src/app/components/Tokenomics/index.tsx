import React from 'react';
import Graph from '../../../static/images/tokenomics.svg';
import './styles.css';

const Tokenomics: React.FC = () => {
    return (
        <div className="tokenomics" id="tokenomics">
            <h2>Tokenomics</h2>
            <div className="tokenomicsBody">
            <img alt="graph" src={Graph} className="graph" />
            <div className='tokenomicsInfo'>
                <h4>Total supply: <span className="spec">444,444,444,444,444</span></h4>
                <div className="tokenomicsInfoContent">
                <p>LP supply: <span className="spec">422,222,222,222,222</span></p>
                <p><span className="spec">5%</span> allocated for community development purposes.</p>
                <p>LP tokens burnt, contract renounced.</p>
                <p>No taxes, GoPlus Token Security <span className="spec">Rating A+++</span></p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Tokenomics;