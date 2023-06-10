import React from "react";

function Die({ numSides = 6 }) {
  console.log(numSides);
  const roll = Math.floor(Math.random() * numSides) + 1;
  return (
    <p>
      {numSides}-sided die roll {roll}
    </p>
  );
}

export default Die;
