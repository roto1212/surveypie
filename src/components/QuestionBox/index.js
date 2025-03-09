import styled from "styled-components";

import useCurrentQuestion from "../../hooks/useCurrentQuestion";
import ActionButtons from "../ActionButtons";
import Body from './../Body/index';
import Desc from "../Desc";
import Title from "../Title";
import useCurrentAnswer from "../../hooks/useCurrentAnswer";

function QuestionBox() {
  const [answer, setAnswer] = useCurrentAnswer();
  const question = useCurrentQuestion();
  return <QuestionBoxWrapper>
    <Title>{question.title}</Title>
    <Desc>{question.desc}</Desc>
    <Body type={question.type} answer={answer} setAnswer={setAnswer} options={question.options} />
    <ActionButtons />
  </QuestionBoxWrapper>
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QuestionBox;