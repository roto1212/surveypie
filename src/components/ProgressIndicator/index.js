import styled from "styled-components";
import Bar from "../Bar";
import { useRecoilValue } from "recoil";
import questionsLengthState from "../../stores/survey/questionsLengthState";
import useAnswers from "../../hooks/useAnswers";
import useStep from "../../hooks/useStep";

function ProgressIndicator() {
  const questionsLength = useRecoilValue(questionsLengthState);
  const [answers] = useAnswers();
  const step = useStep();
  const bars = [];
  for (let i = 0; i < questionsLength; i++) {
    let status = 'pending';
    if (i === step) {
      status = 'in-progress';
    } else if (answers[i]) {
      status = 'done';
    }
    bars.push(
      <Bar key={i} status={status} />
    );
  }
  return <ProgressIndicatorWrapper>
    {bars}
    <PageCount><span>{step + 1}</span>/{questionsLength}</PageCount>
  </ProgressIndicatorWrapper>
}

export default ProgressIndicator;

const ProgressIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: calc(100% + 24px);
  left: 0;
  width: 100%;
  align-items: center;
  gap: 8px;

`;

const PageCount = styled.div`
  margin-left: 8px;
  color: #636262;
  font-size: 16px;
  line-height: 19px;

  span {
    color: #121111;
    font-weight: bold;
  }
`;


