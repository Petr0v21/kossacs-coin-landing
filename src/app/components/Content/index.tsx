import React from "react";
import { ContentStyled } from "../../styled-components/Content";
import { Roadmap } from "../Roadmap";
import ImgKossacs from "../../../static/images/CossacksWithBorder.png";
import ImgTwiter from "../../../static/images/TwitterIcon.svg";
import ImgTelegram from "../../../static/images/TelegramIcon.svg";
import ImgT from "../../../static/images/ImageT.svg";
import ImgE from "../../../static/images/ImageE.svg";
import ImgO from "../../../static/images/ImageO.svg";
import Logo from "../../../static/images/Logo.svg";
import Instagram from "../../../static/images/Instagram.svg";
import Mail from "../../../static/images/Mail.svg";
import Spotify from "../../../static/images/Spotify - Original.svg";
import TikTok from "../../../static/images/TikTok - Original.svg";
import YouTube from "../../../static/images/YouTube - Original.svg";
import Tokenomics from "../Tokenomics";

export const Content = () => {
  return (
    <ContentStyled>
      <div className="preview" id="test1">
        <h2 className="preview-title">Cossacs</h2>
        <div className="preview-content">
          <div className="preview-main-content">
            <label>
              Pepe is tired of watching everyone play hot potato with the
              endless derivative Shiba Cum GME lonKishuTurbo Ass Floki Moon Inu
              coins. The Inu’s have had their day. It’s time for the most
              recognizable meme in the world to take his reign as king of the
              memes.
            </label>
          </div>
          <img alt="logo" src={Logo} className="logo-for-mobile" />

          <div className="preview-secondery-content">
            <label>
              Pepe is here to make memecoins great again. Launched stealth with
              no presale, zero taxes, LP burnt and contract renounced, $PEPE is
              a coin for the people, forever.
            </label>
          </div>
        </div>

        <div className="preview-button">
          <a
            href="https://app.uniswap.org/#/tokens/ethereum/0x5bf23d44304cc645c98f15bc2696fc0eb1ccc0c7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <label>Buy Cossacks</label>
          </a>
        </div>
      </div>
      <div className="get-start" id="test2">
        <h2>Collect your Army</h2>
        <div className="row-start">
          <div className="number-block">1</div>
          <div className="content">
            <h4>Create a Wallet</h4>
            <label>
              download metamask or your wallet of choice from the app store or
              google play store for free. Desktop users, download the google
              chrome extension by going to metamask.io.
            </label>
          </div>
        </div>
        <div className="row-start">
          <div className="number-block">2</div>
          <div className="content">
            <h4>Get Some ETH</h4>
            <label>
              have ETH in your wallet to switch to Cossacks. If you don’t have
              any ETH, you can buy directly on metamask, transfer from another
              wallet, or buy on another exchange and send it to your wallet.
            </label>
          </div>
        </div>
        <div className="row-start">
          <div className="number-block">3</div>
          <div className="content">
            <h4>Go to Uniswap</h4>
            <label>
              connect to Uniswap. Go to app.uniswap.org in google chrome or on
              the browser inside your Metamask app. Connect your wallet. Paste
              the $PEPE token address into Uniswap, select Pepe, and confirm.
              When Metamask prompts you for a wallet signature, sign.
            </label>
          </div>
        </div>
        <div className="row-start">
          <div className="number-block">4</div>
          <div className="content">
            <h4>Switch ETH for Cossacks</h4>
            <label>
              switch ETH for Cossacks. We have ZERO taxes so you don’t need to
              worry about buying with a specific slippage, although you may need
              to use slippage during times of market volatility.
            </label>
          </div>
        </div>
      </div>
      <Roadmap />
      <Tokenomics />
      <div className="contacts" id="test4">
        <h2>Connect to community</h2>
        <div className="contacts-content">
          <img
            alt="kossacs"
            src={ImgKossacs}
            className="contacts-content-img"
          />
          <div className="contacts-content-text">
            <label>
              $pepe coin has no association with Matt Furie or his creation Pepe
              the Frog. This token is simply paying homage to a meme we all love
              and recognize. $PEPE is a meme coin with no intrinsic value or
              expectation of financial return. There is no formal team or
              roadmap. the coin is completely useless and for entertainment
              purposes only.
            </label>
            <div className="icons">
              <div>
                <a
                  href="https://www.dextools.io/app/en/ether/pair-explorer/0xa6e477acdeee7204ee72ef006d9fe7f080b7b4e2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="T" src={ImgT} />
                </a>
                <a
                  href="https://etherscan.io/token/0x5bf23d44304cc645c98f15bc2696fc0eb1ccc0c7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="E" src={ImgE} />
                </a>
                <a
                  href="https://app.uniswap.org/#/tokens/ethereum/0x5bf23d44304cc645c98f15bc2696fc0eb1ccc0c7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="O" src={ImgO} />
                </a>
                <a
                  href="https://twitter.com/0xCossacks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="twitter" src={ImgTwiter} />
                </a>
              </div>
              <div>
                <a
                  href="https://t.me/CossacksETH"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="telegram" src={ImgTelegram} />
                </a>
                <a
                  href="https://instagram.com/0xCossacks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img alt="instagram" src={Instagram} />
                </a>
                <a
                  href="https://tiktok.com/@0xcossacks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="Tiktok" src={TikTok} />
                </a>
                <a
                  href="https://youtu.be/jIMjgNDwTxg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="YouTube" src={YouTube} />
                </a>
              </div>
              <div>
                <a
                  href="https://open.spotify.com/album/2VtkbKUooQ1aMoPHeVBOxM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="Spotify" src={Spotify} />
                </a>
                <a
                  href="mailto:ceo@cossacks.vip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="Mail" src={Mail} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentStyled>
  );
};
