function handleFormSubmit(e) {
  e.preventDefault();
  console.log("Submitted the form!");
}

function Form() {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
