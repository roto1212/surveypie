import TextInput from "../TextInput";

function Body({ type, answer, setAnswer }) {
  let InputComponent = null;

  // if (type === "select") inputComponent = SelectInput;
  if (type === "text") InputComponent = TextInput;
  // if (type === "textarea") inputComponent = TextAreaInput;

  return <>
    <InputComponent answer={answer} setAnswer={setAnswer} />
  </>
}

export default Body;