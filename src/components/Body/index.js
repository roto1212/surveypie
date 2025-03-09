import SelectInput from "../SelectInput";
import TextAreaInput from "../TextAreaInput";
import TextInput from "../TextInput";

function Body({ type, answer, setAnswer, options }) {
  let InputComponent = null;

  if (type === "select") InputComponent = SelectInput;
  if (type === "text") InputComponent = TextInput;
  if (type === "textarea") InputComponent = TextAreaInput;

  return <>
    <InputComponent answer={answer} setAnswer={setAnswer} options={options} />
  </>
}

export default Body;