import ActionButtons from "../ActionButtons";
import Desc from "../Desc";
import Title from "../Title";
import Body from './../Body/index';

function QuestionBox({ question, questionLength, step, answer, setAnswer }) {
  return <div>
    <Title>{question.title}</Title>
    <Desc>{question.desc}</Desc>
    <Body type={question.type} answer={answer} setAnswer={setAnswer} options={question.options} />
    <ActionButtons questionLength={questionLength} step={step} />
  </div>
}

export default QuestionBox;