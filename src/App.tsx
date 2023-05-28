import React, { useState } from "react";
import { Header, HeaderForPhone } from "./app/components/Header";
import { Footer } from "./app/components/Footer";
import { Content } from "./app/components/Content";
import { MainWrapper } from "./app/styled-components/Main";
import Coin from "./static/images/Coin.svg";
import Rune from "./static/images/Rune_final.svg";
import GroupCoin from "./static/images/Group_coins.svg";
import "./styles/main.css";

const App = () => {
  const [openHeader, setOpenHeader] = useState(false);
  return (
    <MainWrapper>
      <img alt="rune" src={Rune} className="rune" />
      <img alt="coin" src={Coin} className="coin" />
      <img alt="group_coin" src={GroupCoin} className="coin_group " />
      <Header open={openHeader} setOpen={setOpenHeader} />
      {!openHeader ? (
        <>
          <Content />
          <Footer />
        </>
      ) : (
        <>
          <HeaderForPhone setOpen={setOpenHeader} />
        </>
      )}
    </MainWrapper>
  );
};

export default App;
