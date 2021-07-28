import rock from "./assets/rock.jpeg";
import paper from "./assets/paper.jpeg";
import scissor from "./assets/scissor.jpeg";
import { useState } from "react";

import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [myChoose, setMyChoose] = useState("rock");
  const [myState, setMyState] = useState("");
  const stateDiv = document.getElementsByClassName("stateDiv")[0];

  const handleSelectBtn = (e) => {
    const myImage = document.getElementsByClassName("img-left")[0];
    const myText = e.target.textContent.toLowerCase();
    let myValue;
    switch (myText) {
      case "rock":
        myValue = rock;
        break;
      case "paper":
        myValue = paper;
        break;
      case "scissor":
        myValue = scissor;
        break;
      default:
        myValue = rock;
    }
    myImage.src = myValue;
    setMyChoose(myText);
  };

  const handleStartBtn = () => {
    const stateDiv = document.getElementsByClassName("stateDiv")[0];
    stateDiv.classList.remove("yellowbg", "redbg");

    const randomNumber = Math.floor(Math.random() * 3);
    const pcImage = document.getElementsByClassName("img-right")[0];

    //setIntervali bir değişkene atamazsam sonradan clearInterval kullanamıyorum
    var myInterval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 3);
      let pcValue;
      switch (randomNumber) {
        case 0:
          pcValue = rock;
          break;
        case 1:
          pcValue = paper;
          break;
        case 2:
          pcValue = scissor;
          break;
        default:
          pcValue = rock;
      }
      pcImage.src = pcValue;
    }, 100);

    setTimeout(() => {
      clearInterval(myInterval);
      const pcImage = document.getElementsByClassName("img-right")[0];
      let pcValue;
      switch (randomNumber) {
        case 0:
          pcValue = rock;
          break;
        case 1:
          pcValue = paper;
          break;
        case 2:
          pcValue = scissor;
          break;
        default:
          pcValue = rock;
      }
      pcImage.src = pcValue;

      let myPcWord;

      function getPCword() {
        if (pcImage.src.includes("rock")) {
          myPcWord = "rock";
        } else if (pcImage.src.includes("paper")) {
          myPcWord = "paper";
        } else if (pcImage.src.includes("scissor")) {
          myPcWord = "scissor";
        }
      }
      getPCword();

      if (myChoose === "rock") {
        if (myPcWord === "scissor") {
          setMyState("YOU WON!");
          setScore(score + 1);
        } else if (myPcWord === "paper") {
          setMyState("YOU LOSE!");
          setScore(score - 1);
        } else {
          setMyState("DRAW!");
        }
      } else if (myChoose === "paper") {
        if (myPcWord === "scissor") {
          setMyState("YOU LOSE!");
          setScore(score - 1);
        } else if (myPcWord === "rock") {
          setMyState("YOU WON!");
          setScore(score + 1);
        } else {
          setMyState("DRAW!");
        }
      } else if (myChoose === "scissor") {
        if (myPcWord === "paper") {
          setMyState("YOU WON!");
          setScore(score + 1);
        } else if (myPcWord === "rock") {
          setMyState("YOU LOSE!");
          setScore(score - 1);
        } else {
          setMyState("DRAW!");
        }
      }
    }, 2500);
  };

  if (score === 3) {
    setMyState("CONGRATULATIONS!");
    stateDiv.classList.add("yellowbg");
    setScore(0);
  } else if (score === -3) {
    setMyState("GAME OVER!");
    setScore(0);
    stateDiv.classList.add("redbg");
  }

  return (
    <div className="App">
      <div className="container">
      <div className="flex-header">
          <p>ROCK, PAPER, SCISSOR GAME</p>
        </div>
        <div className="flex-toppest">
          <p>YOU</p>
          <p>PC</p>
        </div>
        <div className="flex-top">
          <div className="pictureDiv ">
            <img className="myImg img-left" src={rock} alt="" />
          </div>
          <div className="pictureDiv pcDiv">
            <img className="myImg img-right" src={paper} alt="" />
          </div>
        </div>
        <div className="flex-bottom">
          <div className="left-btns">
            <button className="selectBtn" onClick={handleSelectBtn}>
              Rock
            </button>
            <button className="selectBtn" onClick={handleSelectBtn}>
              Paper
            </button>
            <button className="selectBtn" onClick={handleSelectBtn}>
              Scissor
            </button>
          </div>
          <div className="right-btns">
            <button className="startBtn" onClick={handleStartBtn}>
              Start
            </button>
          </div>
        </div>
        <div className="stateDiv">
          <p>{myState}</p>
        </div>
        <div className="scoreDiv">
          <p>Score: {score}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
