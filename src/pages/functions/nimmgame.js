import "../../css/App.css";
import MenuBar from "../componets/MenuBar";
import { motion } from "framer-motion";
import React from "react";

var cs;

var mi;

var btn1text = "Start";

var btn2text = "Go Functions";

var btn3text = "Go Home";

let münzen = 0;

let humantokens = 0;

var compwin = false;

var playerwin = false;

var playing = false;

function NimmGame() {
  const [refresh, setRefresh] = React.useState(0);

  const C1 = (setRefresh, refresh) => {
    if (playing === true) {
      if (münzen !== 0) {
        münzen -= 1;
        humantokens = 1;
        mi = "Coins: " + münzen;
        Computer(setRefresh, refresh);
      } else {
        compwin = true;
        playerwin = false;
        PlayAgain();
      }
    } else {
      Play();
    }
  };

  const C2 = (setRefresh, refresh) => {
    if (playing === true) {
      if (münzen !== 0) {
        münzen -= 2;
        humantokens = 2;
        mi = "Coins: " + münzen;
        Computer(setRefresh, refresh);
      } else {
        compwin = true;
        playerwin = false;
        PlayAgain();
      }
    } else {
      window.location.href = "../functions";
    }
  };

  const C3 = (setRefresh, refresh) => {
    if (playing) {
      if (münzen !== 0) {
        münzen -= 3;
        humantokens = 3;
        mi = "Coins: " + münzen;
        Computer(setRefresh, refresh);
      } else {
        compwin = true;
        PlayAgain();
      }
    } else {
      window.location.href = "../../";
    }
  };

  return (
    <>
      <MenuBar />
      <br />

      <main className="grid" style={{ paddingTop: "120px"}}>
        <span className="middle" style={{ alignItems: "center" }}>
          {mi}
        </span>
        <div className="grid-around-space">
          <div className="middle">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="indexBtn"
              onClick={() => {
                setRefresh(refresh + 1);
                C1(setRefresh, refresh);
              }}
            >
              {btn1text}
            </motion.button>
          </div>
        </div>
        <span className="middle" style={{ alignItems: "center" }}>
          {cs}
        </span>
        <span></span>
        <div className="grid-around-space">
          <div className="middle">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="indexBtn"
              onClick={() => {
                setRefresh(refresh + 1);
                C2(setRefresh, refresh);
              }}
            >
              {btn2text}
            </motion.button>
          </div>
        </div>
        <br />
        <span></span>
        <div className="grid-around-space">
          <div className="middle">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="indexBtn"
              onClick={() => {
                setRefresh(refresh + 1);
                C3(setRefresh, refresh);
              }}
            >
              {btn3text}
            </motion.button>
          </div>
        </div>
      </main>
    </>
  );
}

function Play() {
  cs = "";
  münzen = random(10, 20);
  mi = "Coins: " + münzen;
  btn1text = "1";
  btn2text = "2";
  btn3text = "3";
  playing = true;
}

function Computer(setRefresh, refresh) {
  mi = "Coins: " + münzen;
  if (münzen > 0) {
    var computertokens = 4 - humantokens;
    if (münzen - computertokens > 0) {
      münzen -= computertokens;
      cs = "Computer makes minus " + computertokens + ".";
      if (münzen === 0) {
        playerwin = true;
        compwin = false;
        cs = "You Win.";
        PlayAgain();
      }
      setRefresh(refresh + 1);
    } else {
      computertokens = 1;
      while (münzen - computertokens > 0) {
        computertokens++;
      }
      münzen -= computertokens;
      cs = "Computer makes minus " + computertokens + ".";
      if (münzen === 0) {
        playerwin = true;
        compwin = false;
        cs = "You Win.";
        PlayAgain();
      }
      setRefresh(refresh + 1);
    }
  } else {
    compwin = true;
    playerwin = false;
    PlayAgain();
  }
  mi = "Coins: " + münzen;
}

function PlayAgain() {
  playing = false;
  if (playerwin === true) {
    cs = "You Win.";
  } else if (compwin === true) {
    cs = "You Lose.";
  }

  btn1text = "Play Again";
  btn2text = "Go Home";
  btn3text = "Go to Functions";
  compwin = false;
  playerwin = false;
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the
}

export default NimmGame;
