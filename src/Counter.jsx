import { useState } from "react";

function Counter() {
  const [num, setNum] = useState(5);
  console.log("COMPONENT HAS BEEN EXECUTED AGAIN!");
  console.log(`num: ${num}`);
  const changeNum = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <p>The count is: {num}</p>
      <button onClick={changeNum}>Increment</button>
    </div>
  );
}

export default Counter;
