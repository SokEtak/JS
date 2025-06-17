function handleForm(e) {
    e.preventDefault()
  return (
  <>
    <h1>{console.log("form submited",e)}</h1>
  </>
);
}
export default function Form() {
  return (
    <>
      <form onSubmit={handleForm}>
        <button >SUBMIT</button>
      </form>
    </>
  );
}

