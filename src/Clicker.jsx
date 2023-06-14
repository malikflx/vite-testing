function Clicker({ buttonText, message }) {
  return (
    <div>
      <button onClick={() => alert(message)}>{buttonText}</button>
    </div>
  );
}

export default Clicker;
