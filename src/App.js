import { useState, useEffect } from "react";
import PadBank from "./components/PadBank";
import Toggle from "./components/Toggle";
import Display from "./components/Display";

function App() {
  const bankA = [
    {
      id: "Q",
      src: "aChord1",
      name: "Chord 1",
    },
    {
      id: "W",
      src: "aChord2",
      name: "Chord 2",
    },
    {
      id: "E",
      src: "aChord3",
      name: "Chord 3",
    },
    {
      id: "A",
      src: "aTom1",
      name: "Tom 1",
    },
    {
      id: "S",
      src: "aTom2",
      name: "Tom 2",
    },
    {
      id: "D",
      src: "aOpenHat",
      name: "Open Hi Hat",
    },
    {
      id: "Z",
      src: "aKick",
      name: "Kick",
    },
    {
      id: "X",
      src: "aSnare",
      name: "Snare",
    },
    {
      id: "C",
      src: "aClosedHat",
      name: "Closed Hi Hat",
    },
  ];

  const bankB = [
    {
      id: "Q",
      src: "eChord1",
      name: "Chord 1",
    },
    {
      id: "W",
      src: "eChord2",
      name: "Chord 2",
    },
    {
      id: "E",
      src: "eChord3",
      name: "Chord 3",
    },
    {
      id: "A",
      src: "eTom",
      name: "Tom",
    },
    {
      id: "S",
      src: "eClap",
      name: "Clap",
    },
    {
      id: "D",
      src: "eOpenHat",
      name: "Open Hi Hat",
    },
    {
      id: "Z",
      src: "eKick",
      name: "Kick",
    },
    {
      id: "X",
      src: "eSnare",
      name: "Snare",
    },
    {
      id: "C",
      src: "eClosedHat",
      name: "Closed Hi Hat",
    },
  ];

  const soundsGroup = {
    acousticKit: bankA,
    electricKit: bankB,
  };

  const buttonColor = "#dbd9cc";

  const accentColor = "#066eff";

  let [bankName, setBankName] = useState("acousticKit");
  let [bank, setBank] = useState(soundsGroup[bankName]);
  let [power, setPower] = useState(true);
  let [displayText, setDisplayText] = useState("");
  let [volume, setVolume] = useState(1);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      !event.repeat && playSound(event.key.toUpperCase());
    });
  });

  const changeBank = () => {
    if (bankName === "acousticKit") {
      setBankName("electricKit");
      setBank(soundsGroup["electricKit"]);
    } else {
      setBankName("acousticKit");
      setBank(soundsGroup["acousticKit"]);
    }
  };

  function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.currentTime = 0;
    audio.play();
    updateDisplay(selector);
    changeColor(audio);
  }

  function updateDisplay(id) {
    const text = bank.filter((index) => index.id === id)[0].name;
    setDisplayText(text);
  }

  function changeColor(audio) {
    const button = audio.parentElement;
    button.style.backgroundColor = accentColor;
    clearTimeout();
    setTimeout(() => {
      button.style.backgroundColor = buttonColor;
    }, "300");
  }

  function handleVolumeChange(event) {
    setVolume(event.target.value);
    setPadVolume();
  }

  function setPadVolume() {
    const pads = bank.map((sound) => document.getElementById(sound.id));
    pads.forEach((audio) => {
      if (audio) {
        audio.volume = volume;
      }
    });
  }

  function togglePower() {
    setPower(!power);
  }

  return (
    <div
      id="drum-machine"
      className="row justify-content-evenly align-items-center"
    >
      <PadBank
        bank={bank}
        color={buttonColor}
        playSound={playSound}
        power={power}
      />
      <div className="controls-container d-flex flex-column justify-content-evenly align-items-center">
        <Toggle
          topText={"Power"}
          leftText={"Off"}
          rightText={"On"}
          textColor={buttonColor}
          divColor={accentColor}
          state={power}
          func={togglePower}
        />
        <Display text={displayText} color={buttonColor} />
        <input
          id="volume"
          max="1"
          min="0"
          step="0.01"
          type="range"
          value={volume}
          onChange={handleVolumeChange}
        />
        <Toggle
          topText={"Bank"}
          leftText={"A"}
          rightText={"B"}
          textColor={buttonColor}
          divColor={accentColor}
          state={bankName}
          func={changeBank}
        />
      </div>
    </div>
  );
}

export default App;
