function Slots({ num1, num2, num3 }) {
  const isWinner = num1 === num2 && num2 === num3;
  const styles = { color: isWinner ? "green" : "red" };

  return (
    <div className="Slots">
      <h1>{[num1, num2, num3]}</h1>
      {isWinner ? (
        <div>
          <h2 style={styles}>You Win!</h2>
          <h3>Congrats!!!</h3>
        </div>
      ) : (
        <h2 style={styles}>You lose</h2>
      )}
    </div>
  );
}

export default Slots;
