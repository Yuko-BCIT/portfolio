import { useState } from "react";

function Letters() {
  // letter animation on Home
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    "Y",
    "u",
    "k",
    "o",
    "  ",
    "K",
    "i",
    "t",
    "a",
    "h",
    "a",
    "t",
    "a",
  ];
  const devArray = [
    "W",
    "e",
    "b",
    "  ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  const AnimatedLetters = ({ letterClass, strArray, index }) => {
    return (
      <span>
        {strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + index}`}>
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <>
      <AnimatedLetters
        letterClass={letterClass}
        strArray={nameArray}
        index={0}
      />
      <br />
      <AnimatedLetters
        letterClass={letterClass}
        strArray={devArray}
        index={13}
      />
    </>
  );
}

export default Letters;
