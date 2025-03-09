import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import questionsLengthState from "../../stores/survey/questionsLengthState";
import Button from "../Button";
import useStep from "../../hooks/useStep";
import useSurveyId from "../../hooks/useSurveyId";
import postAnswers from "../../services/postAnswers";
import useAnswers from "../../hooks/useAnswers";
import { useState } from "react";

function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const [isLoading, setIsLoading] = useState(false);
  const questionLength = useRecoilValue(questionsLengthState);
  const navigate = useNavigate();
  const isLast = parseInt(questionLength) - 1 === step;
  const answers = useAnswers();

  return <ActionButtonsWrapper>
    {step === 0 || <Button type="SECONDARY" onClick={() => navigate(`${step - 1}`)}>이전</Button>}
    {isLast ?
      <Button type="PRIMARY" onClick={() => {
        setIsLoading(true);
        postAnswers(surveyId, answers).then(() => {
          navigate(`/done/${surveyId}`);
        }).catch((error) => {
          console.error(error.response);
          alert('오류가 발생했습니다. 다시 시도해주세요.');
        }).finally(() => {
          setIsLoading(false);
        });
      }} disabled={isLoading}> {isLoading ? '제출중...' : '제출'} </Button> :
      <Button type="PRIMARY" onClick={() => navigate(`${step + 1}`)}>다음</Button>
    }
  </ActionButtonsWrapper >
}

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default ActionButtons;